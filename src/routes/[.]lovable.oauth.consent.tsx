import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthDetails = {
  client?: { name?: string; client_id?: string; redirect_uris?: string[] } | null;
  scope?: string;
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/auth", search: { next: location.pathname + location.searchStr } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  errorComponent: ({ error }) => (
    <main className="container-x py-24">
      <p className="text-muted-foreground">
        تعذّر تحميل طلب الربط: {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
  component: ConsentPage,
});

function ConsentPage() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "تطبيق خارجي";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("لم يُرجع خادم المصادقة رابط إعادة توجيه.");
      return;
    }
    window.location.href = target;
  }

  return (
    <section className="gradient-hero">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-md card-elevated p-8">
          <h1 className="text-2xl font-extrabold">ربط {clientName} بحسابك في AbaTools</h1>
          <p className="mt-3 text-sm text-muted-foreground leading-7">
            سيتمكّن {clientName} من استخدام أدوات هذا الموقع نيابةً عنك أثناء تسجيل دخولك.
          </p>
          {details?.scope && (
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              الأذونات المطلوبة: {details.scope}
            </p>
          )}
          <p className="mt-3 text-xs text-muted-foreground leading-6">
            هذا لا يتجاوز صلاحيات الموقع ولا سياسات الحماية في قاعدة البيانات.
          </p>
          {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
          <div className="mt-6 flex gap-3">
            <button
              disabled={busy}
              onClick={() => decide(true)}
              className="flex-1 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground disabled:opacity-60"
            >
              الموافقة
            </button>
            <button
              disabled={busy}
              onClick={() => decide(false)}
              className="flex-1 rounded-xl border border-border px-5 py-3 font-bold disabled:opacity-60"
            >
              إلغاء الربط
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

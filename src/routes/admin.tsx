import { createFileRoute, redirect } from "@tanstack/react-router"
import { requireAdmin } from "@/lib/auth"

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    try {
      await requireAdmin()
    } catch {
      throw redirect({ to: "/auth" })
    }
  },
  component: AdminComponent,
})

function AdminComponent() {
  return <div>Loading...</div>
}

import { defineTool } from "@lovable.dev/mcp-js";
import { contactInfo, sitePages } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get the public AbaTools contact details (email, phone/WhatsApp, supervisor) and the list of site pages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `البريد: ${contactInfo.email}`,
          `الهاتف / واتساب: ${contactInfo.phone}`,
          `الإشراف: ${contactInfo.supervisor}`,
          "",
          "الصفحات:",
          sitePages.map((p) => `- ${p.title} (${p.path})`).join("\n"),
        ].join("\n"),
      },
    ],
    structuredContent: { contact: contactInfo, pages: sitePages },
  }),
});
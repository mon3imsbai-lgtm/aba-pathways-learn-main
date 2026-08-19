import { defineTool } from "@lovable.dev/mcp-js";
import { products } from "../content";

export default defineTool({
  name: "list_products",
  title: "List shop products",
  description:
    "List the downloadable digital products in the AbaTools shop with their prices in MAD.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: products
          .map((p) => `- ${p.title} — ${p.price} ${p.currency}\n  ${p.description}`)
          .join("\n"),
      },
    ],
    structuredContent: { products },
  }),
});
import { defineTool } from "@lovable.dev/mcp-js";
import { services, serviceProcess } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List AbaTools consulting, training and assessment services for families, professionals and institutions, plus the engagement process.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          services.map((s) => `- ${s.title}: ${s.description}`).join("\n"),
          "",
          "خطوات العمل:",
          serviceProcess.join("\n"),
        ].join("\n"),
      },
    ],
    structuredContent: { services, process: serviceProcess },
  }),
});
import { defineTool } from "@lovable.dev/mcp-js";
import { courses } from "../content";

export default defineTool({
  name: "list_courses",
  title: "List courses",
  description:
    "List the public AbaTools training courses (ABAT, QASP-S, QBA, RBT, VB-MAPP, PECS and more) with hours and status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = courses
      .map((c) => `- ${c.title} (${c.slug}) — ${c.hours} — ${c.status}\n  ${c.description}`)
      .join("\n");
    return {
      content: [{ type: "text", text: summary }],
      structuredContent: {
        courses: courses.map(({ slug, title, description, hours, status, url }) => ({
          slug,
          title,
          description,
          hours,
          status,
          url,
        })),
      },
    };
  },
});
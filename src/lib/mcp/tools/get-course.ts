import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { courses } from "../content";

export default defineTool({
  name: "get_course",
  title: "Get course details",
  description:
    "Get full public details for one AbaTools course by slug (e.g. `abat`), including modules and target audience when available.",
  inputSchema: { slug: z.string().describe("Course slug, e.g. `abat`.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const course = courses.find((c) => c.slug === slug.trim().toLowerCase());
    if (!course) {
      throw new ToolError(
        `No course with slug "${slug}". Available: ${courses.map((c) => c.slug).join(", ")}`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(course, null, 2) }],
      structuredContent: { course },
    };
  },
});
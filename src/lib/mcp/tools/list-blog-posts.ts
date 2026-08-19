import { defineTool } from "@lovable.dev/mcp-js";
import { blogPosts } from "../content";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List the published AbaTools blog articles with their excerpts and authors.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: blogPosts
          .map((p) => `- ${p.title} (${p.author}, ${p.date})\n  ${p.excerpt}`)
          .join("\n"),
      },
    ],
    structuredContent: { posts: blogPosts },
  }),
});
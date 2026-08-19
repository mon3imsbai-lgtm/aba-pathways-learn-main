import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listCoursesTool from "./tools/list-courses";
import getCourseTool from "./tools/get-course";
import listServicesTool from "./tools/list-services";
import listProductsTool from "./tools/list-products";
import listBlogPostsTool from "./tools/list-blog-posts";
import getContactInfoTool from "./tools/get-contact-info";

const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "abatools-your-aba-companion",
  title: "AbaTools: Your ABA Companion",
  version: "0.1.0",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  instructions:
    "Public tools for AbaTools, an Arabic platform for Autism and Applied Behavior Analysis (ABA) training, consulting and digital resources, supervised by Kaoutar Sami (QBA). Use `list_courses` and `get_course` for training tracks, `list_services` for consulting offerings, `list_products` for the digital shop, `list_blog_posts` for articles, and `get_contact_info` for contact details and site pages. All content is public and mostly in Arabic.",
  tools: [
    listCoursesTool,
    getCourseTool,
    listServicesTool,
    listProductsTool,
    listBlogPostsTool,
    getContactInfoTool,
  ],
});
import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { requireAdminAuth } from "@/lib/auth";

export const requireAdmin = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    await requireAdminAuth();
    return next();
  }
);

export const requireEditor = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const user = await requireAdminAuth();
    if (user.role !== "admin" && user.role !== "editor") {
      throw new Error("Unauthorized: Editor access required");
    }
    return next();
  }
);

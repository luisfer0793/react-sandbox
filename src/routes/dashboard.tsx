import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page/dashboard-page.component";
import { getTodosQuery } from "@/features/dashboard/services/get-todos.service";
import { getPostsService } from "@/features/posts/services/get-posts.service";

export const Route = createFileRoute("/dashboard")({
  component: () => <DashboardPage />,
  loader: async ({ context: { queryClient } }) => {
    const [posts, todos] = await Promise.all([
      queryClient.ensureQueryData(getPostsService),
      queryClient.ensureQueryData(getTodosQuery),
    ]);
    return { posts, todos };
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page/dashboard-page.component";
import { getPostsQuery } from "@/features/dashboard/services/get-posts.service";
import { getTodosQuery } from "@/features/dashboard/services/get-todos.service";

export const Route = createFileRoute("/dashboard")({
  component: () => <DashboardPage />,
  loader: async ({ context: { queryClient } }) => {
    const [posts, todos] = await Promise.all([
      queryClient.ensureQueryData(getPostsQuery),
      queryClient.ensureQueryData(getTodosQuery),
    ]);
    return { posts, todos };
  },
});

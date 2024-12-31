import { useSuspenseQuery } from "@tanstack/react-query";
import { getTodosQuery } from "@/features/dashboard/services/get-todos.service";
import { getPostsQuery } from "@/features/dashboard/services/get-posts.service";

export const DashboardPage = () => {
  const { data: todos } = useSuspenseQuery(getTodosQuery);
  const { data: posts } = useSuspenseQuery(getPostsQuery);

  return (
    <div className="py-4 px-5">
      <h1 className="text-3xl text-center font-bold">Dashboard</h1>
      <h6 className="font-bold">Todos:</h6>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <hr />
      <h6 className="font-bold">Posts:</h6>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

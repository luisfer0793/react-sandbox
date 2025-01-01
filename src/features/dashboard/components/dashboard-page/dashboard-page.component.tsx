import { useSuspenseQuery } from "@tanstack/react-query";
import { getPostsService } from "@/features/posts/services/get-posts.service";
import { PostCard } from "@/features/posts/components/post-card/post-card.component";

export const DashboardPage = () => {
  const { data: posts } = useSuspenseQuery(getPostsService);

  return (
    <div className="py-4 px-5">
      <h1 className="text-3xl text-center font-bold pb-4">Dashboard</h1>
      <PostCard post={posts} />
    </div>
  );
};

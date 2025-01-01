import { Post } from "@/features/posts/types/post.type";
import { queryCache } from "@/lib/query-cache/query-cache.lib";

export const PostCard = ({ post }: { post: Post }) => {
  const query = queryCache.find({
    queryKey: ["POST: GET_ALL"],
  });
  console.log("query", query);
  return (
    <article className="p-4 border border-gray-200 rounded">
      <h6 className="font-bold pb-2 capitalize">{post.title}</h6>
      <p className="text-[15px]">{post.body}</p>
    </article>
  );
};

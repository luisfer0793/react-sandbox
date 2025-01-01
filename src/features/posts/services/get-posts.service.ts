import { queryOptions } from "@tanstack/react-query";
import { Post } from "@/features/posts/types/post.type";

export const getPostsService = queryOptions({
  queryKey: ["POST: GET_ALL"],
  queryFn: async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/10";
    const response = await fetch(url);
    const data: Post = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(response.statusText);
    }
  },
});

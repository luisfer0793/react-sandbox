import { create } from "zustand";
import { Post } from "@/features/posts/types/post.type";
import { createSelectors } from "@/utils/functions/create-selectors.util";

type PostsState = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
};

export const usePostsState = createSelectors(
  create<PostsState>()((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
  })),
);

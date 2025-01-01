import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Footer } from "@/shared/components/footer/footer.component";
import { Header } from "@/shared/components/header/header.component";

type RootRouteContext = {
  queryClient: QueryClient;
  // posts: ReturnType<typeof usePostsState>;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});

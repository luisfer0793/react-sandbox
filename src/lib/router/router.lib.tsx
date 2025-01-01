import { createRouter } from "@tanstack/react-router";
import { queryClient } from "@/lib/query-client/query-client.lib";
import { routeTree } from "@/routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPendingComponent: () => <p>Loading ...</p>,
  defaultErrorComponent: () => <div>Error on loading data</div>,
});

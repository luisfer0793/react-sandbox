import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { router } from "@/lib/router/router.lib";
import { queryClient } from "@/lib/query-client/query-client.lib";

import "@mantine/core/styles.css";

export const App = () => {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

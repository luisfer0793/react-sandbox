import { createFileRoute } from "@tanstack/react-router";
import { getUsersQuery } from "@/features/users/services/get-users.service";
import { UsersPage } from "@/features/users/components/users-page/users-page.component";

export const Route = createFileRoute("/users/")({
  component: () => <UsersPage />,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getUsersQuery),
});

import { createFileRoute } from "@tanstack/react-router";
import { getUsersQuery } from "@/features/users/services/get-users.service";
import { UsersPage } from "@/features/users/components/users-page/users-page.component";
import { User } from "@/features/users/types/user.type";

export const Route = createFileRoute("/users/")({
  component: () => <UsersPage />,
  loader: async ({ context: { queryClient } }) => {
    const { results } = await queryClient.ensureQueryData(getUsersQuery);
    const users = results.map<User>((user) => ({
      ...user,
      id: user.login.uuid,
    }));
    return { users };
  },
});

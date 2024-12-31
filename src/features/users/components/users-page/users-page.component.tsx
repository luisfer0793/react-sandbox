import { useSuspenseQuery } from "@tanstack/react-query";
import { getUsersQuery } from "@/features/users/services/get-users.service";

export const UsersPage = () => {
  const { data } = useSuspenseQuery(getUsersQuery);

  return (
    <>
      <h1 className="text-3xl font-bold pb-4">Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

import { Container, Stack, Title } from "@mantine/core";
import { Route } from "@/routes/users";
import { UserList } from "@/features/users/components/user-list/user-list.component";

export const UsersPage = () => {
  const { users } = Route.useLoaderData();

  return (
    <Container fluid py="md">
      <Stack>
        <Title ta="center">Users Page</Title>
        <UserList users={users} />
      </Stack>
    </Container>
  );
};

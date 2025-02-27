import { Link } from "@tanstack/react-router";
import { Anchor, Box, Container, Group } from "@mantine/core";

export const Header = () => {
  return (
    <Box component="nav" bg="gray.8" c="white" py="md">
      <Container fluid>
        <Group>
          <Anchor fz={15} c="currentColor" to="/dashboard" component={Link}>
            Dashboard
          </Anchor>
          <Anchor fz={15} c="currentColor" to="/users" component={Link}>
            Users
          </Anchor>
        </Group>
      </Container>
    </Box>
  );
};

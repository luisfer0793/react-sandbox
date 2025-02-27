import { Button, Card, Stack, Text, Title } from "@mantine/core";
import { User } from "@/features/users/types/user.type";
import { useSortable } from "@dnd-kit/sortable";
import { CSSProperties } from "react";
import { CSS } from "@dnd-kit/utilities";

export const UserCard = ({ user }: { user: User }) => {
  const sortable = useSortable({ id: user.id });

  const onShowDetailsHandler = () => {
    console.log("User: ", user);
  };

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(sortable.transform),
    transition: sortable.transition,
  };

  return (
    <Card
      withBorder
      shadow="sm"
      padding="sm"
      radius="sm"
      style={styles}
      ref={sortable.setNodeRef}
      {...sortable.attributes}
      {...sortable.listeners}
    >
      <Stack>
        <Title order={6}>
          {user.name.first} {user.name.last}
        </Title>
        <Text fz="sm" truncate="end">
          {user.email}
        </Text>
        <Text fz="sm" c="dimmed">
          {user.id}
        </Text>
        <Button onClick={onShowDetailsHandler}>Show details</Button>
      </Stack>
    </Card>
  );
};

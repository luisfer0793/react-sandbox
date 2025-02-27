import { useState } from "react";
import { Box } from "@mantine/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { User } from "@/features/users/types/user.type";
import { UserCard } from "@/features/users/components/user-card/user-card.component";
import classes from "./user-list.module.css";

export const UserList = ({ users }: { users: User[] }) => {
  const [userList, setUserList] = useState<User[]>(() => users);

  const onDragCardEndHandler = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setUserList((users) => {
        const oldIndex = users.findIndex((user) => user.id === active.id);
        const newIndex = users.findIndex((user) => user.id === over.id);
        return arrayMove(users, oldIndex, newIndex);
      });
    }
    console.log("Event", event);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={onDragCardEndHandler}
    >
      <SortableContext items={userList}>
        <Box component="section" className={classes.userList}>
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
};

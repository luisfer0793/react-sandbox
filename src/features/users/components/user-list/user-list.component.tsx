import { useState } from "react";
import { Box } from "@mantine/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
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
    console.log("Drag end event", event);
  };

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01,
    },
  });
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    pointerSensor,
  );

  return (
    <DndContext
      sensors={sensors}
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

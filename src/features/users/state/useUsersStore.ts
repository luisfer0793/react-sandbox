import { create } from "zustand";
import { User } from "@/features/users/types/user.type";

type UsersState = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const useUsersStore = create<UsersState>()((set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
}));

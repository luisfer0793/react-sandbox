import { queryOptions } from "@tanstack/react-query";
import { User } from "@/features/users/types/user.type";

export const getUsersQuery = queryOptions({
  queryKey: ["USERS: GET_ALL"],
  queryFn: async () => {
    const response = await fetch("https://randomuser.me/api/?results=15");
    const data: ServiceResponse = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(response.statusText);
    }
  },
});

type ServiceResponse = {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: User[];
};

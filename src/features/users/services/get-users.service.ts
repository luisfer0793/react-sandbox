import { queryOptions } from "@tanstack/react-query";
import { UnparsedUser } from "@/features/users/types/user.type";

type ServiceResponse = {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: UnparsedUser[];
};

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

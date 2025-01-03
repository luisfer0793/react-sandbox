import { queryOptions } from "@tanstack/react-query";

type ServiceResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodosQuery = queryOptions({
  queryKey: ["TODOS: GET_ALL"],
  queryFn: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/10",
    );
    const data: ServiceResponse = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(response.statusText);
    }
  },
});

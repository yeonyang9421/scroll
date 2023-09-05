import { useQueryClient } from "@tanstack/react-query";
import { TodoType } from "./Todo";
import { queryKey } from "./queryKey";

export default function Test() {
  const queryClient = useQueryClient();
  const todos = queryClient.getQueryData<TodoType[]>(queryKey.todo);

  return (
    <div>
      {todos?.map((each) => (
        <li key={each.id}>{each.title}</li>
      ))}
    </div>
  );
}

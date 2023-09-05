import { onlineManager, useQuery } from "@tanstack/react-query";
import { useScrollRestoration } from "use-scroll-restoration";
import Test from "./Test";
import { queryKey } from "./queryKey";

export type TodoType = { id: number; title: string; state: string };

export default function Todo() {
  const { ref, setScroll } = useScrollRestoration("todos", {
    debounceTime: 200,
    persist: "sessionStorage",
  });

  const { data } = useQuery({
    queryKey: queryKey.todo,
    queryFn: () => {
      return Promise.resolve([
        { id: 1, title: "A Feature", state: "closed" },
        { id: 2, title: "Some Bug", state: "open" },
      ]);
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return (
    <div>
      {data?.map((each) => (
        <li key={each.id}>{each.title}</li>
      ))}
      {onlineManager.isOnline() ? "online" : "offline"}
      <Test />
    </div>
  );
}

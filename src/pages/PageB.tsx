import { useLoaderData, useLocation } from "react-router-dom";
import { useScrollRestoration } from "use-scroll-restoration";
import { ArrayLoaderData } from "./ArrayLoaderData";

export default function PageB() {
  const data = useLoaderData() as ArrayLoaderData;
  const location = useLocation();

  const { ref } = useScrollRestoration(location.pathname, {
    debounceTime: 200,
    persist: "sessionStorage",
  });

  return (
    <div
      style={{ height: "100%", overflowY: "auto", outline: "1px solid red" }}
      ref={ref}
    >
      <h2>PageB</h2>
      {data.arr.map((n) => (
        <p key={n} ref={ref}>
          Item {n} on {location.pathname}
        </p>
      ))}
    </div>
  );
}

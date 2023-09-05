import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ArrayLoaderData } from "./pages/ArrayLoaderData";
import Layout from "./pages/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

export async function getPageALoader(): Promise<ArrayLoaderData> {
  await new Promise((r) => setTimeout(r, 10));
  return {
    arr: new Array(100).fill(null).map((_, i) => i),
  };
}

export async function getPageBLoader(): Promise<ArrayLoaderData> {
  await new Promise((r) => setTimeout(r, 10));
  return {
    arr: new Array(100).fill(null).map((_, i) => i),
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <h2>HOME</h2> },
      { path: "/a", element: <PageA />, loader: getPageALoader },
      { path: "/b", element: <PageB />, loader: getPageBLoader },
    ],
  },
]);

function App() {
  const [queryClient] = useState<QueryClient>(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          refetchOnMount: false,
          retryOnMount: false,
          retry: 0,
          refetchInterval: 0,
          staleTime: 2 * 60 * 1000,
        },
      },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <Todo /> */}

      <ReactQueryDevtools panelPosition="right" />
    </QueryClientProvider>
  );
}

export default App;

import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { UMKMDetail } from "./components/UMKMDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
    ],
  },
  {
    path: "/umkm/:id",
    Component: UMKMDetail,
  }
]);

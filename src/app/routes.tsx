import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Universities } from "./pages/Universities";
import { Guides } from "./pages/Guides";
import { Reviews } from "./pages/Reviews";
import { FAQ } from "./pages/FAQ";
import { About } from "./pages/About";
import { Booking } from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/universities",
    Component: Universities,
  },
  {
    path: "/guides",
    Component: Guides,
  },
  {
    path: "/reviews",
    Component: Reviews,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/booking/:university",
    Component: Booking,
  },
]);

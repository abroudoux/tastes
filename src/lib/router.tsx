import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import PageNotFound from "@/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: "/gallery",
    element: <Gallery />,
    errorElement: <PageNotFound />
  }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import App from "@/pages/App";
import PageNotFound from "@/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />
  }
]);

export default router;

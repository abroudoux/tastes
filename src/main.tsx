import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/lib/router";
import { ThemeProvider } from "@/config/theme-provider";

import { Toaster } from "@/components/ui/toaster";

import "@/style/index.css";
import "@/style/layouts.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className="w-screen h-screen flex-col-center-center p-4 bg-black">
      <div className="w-full h-full p-8 rounded-xl bg-white">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </div>
  </ThemeProvider>
);

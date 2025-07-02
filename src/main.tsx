import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./route/Route.tsx";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

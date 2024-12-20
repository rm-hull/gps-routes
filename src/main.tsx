import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Backdrop } from "./Backdrop.tsx";
// import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Backdrop>
        <App />
      </Backdrop>
    </Provider>
  </StrictMode>
);

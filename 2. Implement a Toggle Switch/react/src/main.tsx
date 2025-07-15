import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../../1. Create a Counter Component/react/App.tsx";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);

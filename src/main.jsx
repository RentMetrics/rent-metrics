import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import App
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App /> {/* No need to wrap in <BrowserRouter> */}
    </StrictMode>
);

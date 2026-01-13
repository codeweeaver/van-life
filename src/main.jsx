import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import "./index.css";
import "./server.js";
<<<<<<< HEAD
import { AuthProvider } from "./contexts/AuthContext.jsx";
=======
>>>>>>> bugfix-product-fetching

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
<<<<<<< HEAD
  </StrictMode>
=======
  </StrictMode>,
>>>>>>> bugfix-product-fetching
);

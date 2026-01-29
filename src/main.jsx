import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Estadisticas from "./components/Body/Estadisticas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Estadisticas />
  </StrictMode>,
);

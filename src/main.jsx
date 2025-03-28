import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import App from "./pages/App.jsx";
import Home from "./pages/Home.jsx";
import Err404 from "./pages/Err404.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:userId" element={<App />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

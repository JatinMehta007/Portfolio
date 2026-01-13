import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./files/about.tsx";
import { Navbar2 } from "./files/navbars.tsx";
import { Contact } from "./files/contactMe.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
    <Navbar2></Navbar2>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectDetails } from "./files/project-details.tsx";
import { Navbar2 } from "./files/navbars.tsx";
import { Contact } from "./files/contactMe.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
    <div>
    <Navbar2></Navbar2>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
    </Theme>
  </StrictMode>
);

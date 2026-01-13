"use client";
import React, { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className=" rounded-xl cursor-pointer flex items-center justify-center "
    >
      {theme === "light" ? (
        <IconMoon size={22} className="text-zinc-700" />
      ) : (
        <IconSun size={22} className="text-zinc-100" />
      )}
    </div>
  );
};
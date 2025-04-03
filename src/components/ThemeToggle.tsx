import React from "react";
import { useTheme } from "../context/ThemeContext";
import { ToggleButton } from "../styles/ThemeToggle";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </ToggleButton>
  );
};

export default ThemeToggle;

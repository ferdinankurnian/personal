"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative flex items-center">
      {/* The actual shadcn/ui Switch, made visually transparent but functional */}
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        className="h-6 w-11 p-0 opacity-0 absolute z-10" // Make it invisible but clickable
      />

      {/* Custom track */}
      <div
        className={cn(
          "h-6 w-11 rounded-full transition-colors duration-200",
          theme === "dark" ? "bg-neutral-700" : "bg-neutral-200", // Darker track for dark mode
        )}
      ></div>

      {/* Custom thumb with icon */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full shadow-md transition-transform duration-200 flex items-center justify-center",
          theme === "dark"
            ? "translate-x-[22px] bg-white" // Move to right, white background
            : "translate-x-[2px] bg-white", // Move to left, white background
        )}
      >
        {theme === "light" ? (
          <Sun className="h-3 w-3 text-neutral-500" />
        ) : (
          <Moon className="h-3 w-3 text-neutral-700" />
        )}
      </div>
    </div>
  );
}

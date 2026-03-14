// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { IconButton } from "./ui/icon-button";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

  return (
  <IconButton
      onClick={() => setTheme(isDark ? "light" : "dark")}
      icon={isDark ? <Sun /> : <Moon />}
      width={50}
      height={50}
      widthIcon={28}
      heightIcon={28}
      
    />
  );
}
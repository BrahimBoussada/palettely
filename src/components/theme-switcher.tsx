"use client";

import { useThemeContext } from "@/context/theme-context";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";

export function ThemeSwitcher() {
  const { theme, mode, setTheme, setMode, hydrated } = useThemeContext();

  if (!hydrated) {
    return null; // manual fallback
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      className=" fixed left-1/2 -translate-1/2 bottom-8 flex  justify-center items-center gap-4"
    >
      <Tabs className="flex items-center" value={theme}>
        <TabsList>
          <TabsTrigger value="default" onClick={() => setTheme("default")}>
            Default
          </TabsTrigger>

          <TabsTrigger value="purple" onClick={() => setTheme("purple")}>
            Purple
          </TabsTrigger>

          <TabsTrigger value="green" onClick={() => setTheme("green")}>
            Green
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* MODE */}

      <Tabs className="flex items-center" value={mode}>
        <TabsList>
          <TabsTrigger value="light" onClick={() => setMode("light")}>
            <SunIcon className="size-4" />
          </TabsTrigger>

          <TabsTrigger value="dark" onClick={() => setMode("dark")}>
            <MoonIcon className="size-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </motion.div>
  );
}

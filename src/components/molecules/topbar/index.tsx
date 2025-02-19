import { SidebarTrigger } from "@/components/ui/sidebar";
import { useThemeStore } from "@/store/theme-store";
import { Moon, Sun } from "lucide-react";
import { FC } from "react";

const Topbar: FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center justify-between sticky top-0 w-full h-14 bg-neutral-50 dark:bg-neutral-900 border-b z-10 px-5">
      <SidebarTrigger />
      <button onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</button>
    </div>
  );
};

export default Topbar;

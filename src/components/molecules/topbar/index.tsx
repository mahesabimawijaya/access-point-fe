import { SidebarTrigger } from "@/components/ui/sidebar";
import { FC } from "react";

const Topbar: FC = () => {
  return (
    <div className="flex items-center sticky top-0 w-full h-14 bg-neutral-50 border-b z-10 px-5">
      <SidebarTrigger />
    </div>
  );
};

export default Topbar;

import Topbar from "@/components/molecules/topbar";
import AppSidebar from "@/components/organisms/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Topbar />
        <main className="p-5">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

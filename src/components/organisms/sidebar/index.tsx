import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Bell, Home, MonitorSmartphone, Network, Settings, Shield } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Network",
    url: "/network",
    icon: Network,
  },
  {
    title: "Device",
    url: "/device",
    icon: MonitorSmartphone,
  },
  {
    title: "Config",
    url: "/config",
    icon: Settings,
  },
  {
    title: "Security",
    url: "/security",
    icon: Shield,
  },
  {
    title: "Notification",
    url: "/notification",
    icon: Bell,
  },
];

const AppSidebar: FC = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-red-600 text-3xl font-bold mx-auto mt-2">INDIHOME</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

import { NavUser } from "@/components/molecules/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { user } from "@/helper/data";
import usePath from "@/hooks/use-path";
import { Bell, Home, MonitorSmartphone, Network, Settings, Shield } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router";

const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "Network",
    url: "network",
    icon: Network,
  },
  {
    title: "Device",
    url: "device",
    icon: MonitorSmartphone,
  },
  {
    title: "Config",
    url: "config",
    icon: Settings,
  },
  {
    title: "Security",
    url: "security",
    icon: Shield,
  },
  {
    title: "Notification",
    url: "notification",
    icon: Bell,
  },
];

const AppSidebar: FC = () => {
  const path = usePath(1);

  return (
    <Sidebar>
      <SidebarHeader className="mb-[-15px]">
        <Link to={"/"}>
          <img src="/favicon.png" className="w-16 mx-auto" alt="" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`/${item.url}`} className={path === item.url ? "text-red-600" : ""}>
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
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

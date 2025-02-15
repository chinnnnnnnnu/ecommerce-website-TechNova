import { useLocation } from "react-router-dom";

import {
  Calendar,
  ChartBar,
  FilePlus2Icon,
  GalleryVerticalEnd,
  Home,
  Inbox,
  PackageSearch,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Create Products",
    url: "/admin/dashboard",
    icon: FilePlus2Icon,
  },
  {
    title: "All Products",
    url: "/admin/dashboard/all-products",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Orders",
    url: "/admin/dashboard/orders",
    icon: PackageSearch,
  },
  {
    title: "Analytics",
    url: "/admin/dashboard/analytics",
    icon: ChartBar,
  },
  {
    title: "Settings",
    url: "/admin/dashboard/settings",
    icon: Settings,
  },
];

const AppSidebar = () => {


    const {pathname}  = useLocation();
    
  return (
    <Sidebar>
      <SidebarHeader>
        <h3 className="text-xl font-bold px-2">Dashboard</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild 
                className={`${pathname === item.url && "bg-gray-200 dark:bg-zinc-600"}`}
                >
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;

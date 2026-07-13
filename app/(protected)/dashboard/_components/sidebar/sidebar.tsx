"use client"

import { CommandIcon, LayoutDashboardIcon, LifeBuoyIcon } from "lucide-react"
import Link from "next/link"
import type { ComponentProps } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavPlatform } from "./nav-platform"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"

const data = {
  navMain: [
    {
      icon: <LayoutDashboardIcon />,
      title: "Dashboard",
      url: "/dashboard",
    },
  ],
  navSecondary: [
    {
      icon: <LifeBuoyIcon />,
      title: "Report an issue",
      url: "https://github.com/neiforfaen/xeeno.app/issues",
    },
  ],
  platform: [
    {
      icon: <LifeBuoyIcon />,
      name: "React",
      url: "/dashboard/exercises/react",
    },
  ],
  user: {
    avatar: "/avatars/shadcn.jpg",
    email: "m@example.com",
    name: "shadcn",
  },
}

export const RootSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="offcanvas" {...props}>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="data-[slot=sidebar-menu-button]:p-1.5!"
            render={<Link href="/dashboard" />}
          >
            <CommandIcon className="size-5!" />
            <span className="font-semibold text-base">Xeeno</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain items={data.navMain} />
      <NavPlatform items={data.platform} />
      <NavSecondary className="mt-auto" items={data.navSecondary} />
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
  </Sidebar>
)

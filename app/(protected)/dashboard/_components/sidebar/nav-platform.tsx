"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"

interface NavPlatformProps {
  items: {
    name: string
    url: string
    icon: ReactNode
  }[]
}

export const NavPlatform = ({ items }: NavPlatformProps) => (
  <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>Exercises</SidebarGroupLabel>
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton render={<Link href={item.url} />}>
            {item.icon}
            <span>{item.name}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
)

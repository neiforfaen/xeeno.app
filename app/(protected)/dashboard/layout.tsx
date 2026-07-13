import type { CSSProperties, ReactNode } from "react"
import { SidebarProvider } from "#/components/ui/sidebar"
import { DashboardContent } from "./_components/dashboard-content"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          "--header-height": "calc(var(--spacing) * 12)",
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as CSSProperties
      }
    >
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  )
}

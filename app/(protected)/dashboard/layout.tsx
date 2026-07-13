import { type CSSProperties, type ReactNode, Suspense } from "react"
import { SidebarProvider } from "#/components/ui/sidebar"
import { DashboardContent } from "./_components/dashboard-content"
import { DashboardContentLoadingState } from "./_components/dashboard-content.loading"

interface DashboardLayoutProps {
  children: ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          "--header-height": "calc(var(--spacing) * 12)",
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as CSSProperties
      }
    >
      <Suspense fallback={<DashboardContentLoadingState />}>
        <DashboardContent>{children}</DashboardContent>
      </Suspense>
    </SidebarProvider>
  )
}

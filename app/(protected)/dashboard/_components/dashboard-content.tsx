import type { ReactNode } from "react"
import { Suspense } from "react"
import { SidebarInset } from "#/components/ui/sidebar"
import { DashboardContentLoadingState } from "./dashboard-content.loading"
import { AppSidebarWithUser } from "./sidebar/app-sidebar"
import { SiteHeader } from "./site-header"

interface DashboardContentProps {
  children: ReactNode
}

export const DashboardContent = ({ children }: DashboardContentProps) => (
  <>
    <Suspense fallback={<DashboardContentLoadingState />}>
      <AppSidebarWithUser variant="inset" />
    </Suspense>
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <main className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarInset>
  </>
)

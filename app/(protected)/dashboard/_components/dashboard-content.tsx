import type { ReactNode } from "react"
import { SidebarInset } from "#/components/ui/sidebar"
import { createClient } from "#/lib/supabase/server"
import { UserProvider } from "#/providers/user"
import { AppSidebar } from "./sidebar/app-sidebar"
import { SiteHeader } from "./site-header"

interface DashboardContentProps {
  children: ReactNode
}

export const DashboardContent = async ({ children }: DashboardContentProps) => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <UserProvider user={user}>
      <AppSidebar variant="inset" />
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
    </UserProvider>
  )
}

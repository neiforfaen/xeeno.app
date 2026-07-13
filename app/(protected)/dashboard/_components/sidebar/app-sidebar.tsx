import type { ComponentProps } from "react"
import type { Sidebar } from "#/components/ui/sidebar"
import { createClient } from "#/lib/supabase/server"
import { UserProvider } from "#/providers/user"
import { RootSidebar } from "./sidebar"

export const AppSidebarWithUser = async (
  props: ComponentProps<typeof Sidebar>
) => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <UserProvider user={user}>
      <RootSidebar {...props} />
    </UserProvider>
  )
}

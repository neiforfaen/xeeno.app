import { CommandIcon } from "lucide-react"
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
} from "#/components/ui/sidebar"
import { Skeleton } from "#/components/ui/skeleton"

export const DashboardContentLoadingState = () => (
  <Sidebar collapsible="offcanvas" variant="inset">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="data-[slot=sidebar-menu-button]:p-1.5!">
            <CommandIcon className="size-5!" />
            <span className="font-semibold text-base">Xeeno</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-5 w-36 rounded-sm" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel>Exercises</SidebarGroupLabel>
        <SidebarMenu>
          {new Array(1).fill(null).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: loading state, stable index
            <SidebarMenuItem key={index}>
              <SidebarMenuButton>
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-5 w-36 rounded-sm" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup className="mt-auto">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-5 w-42 rounded-sm" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <div className="flex flex-row items-center gap-2 p-2">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-4 w-32 rounded-sm" />
        <Skeleton className="mr-1 ml-auto h-5 w-2 rounded-sm" />
      </div>
    </SidebarFooter>
  </Sidebar>
)

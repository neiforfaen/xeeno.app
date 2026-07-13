import { CommandIcon } from "lucide-react"
import { Separator } from "#/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui/sidebar"
import { Skeleton } from "#/components/ui/skeleton"
import { Spinner } from "#/components/ui/spinner"

export const DashboardContentLoadingState = () => (
  <>
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
            {new Array({ length: 1 }).map((_, index) => (
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
    <SidebarInset>
      <div className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <Skeleton className="h-5 w-5 rounded-sm" />
          <Separator
            className="mx-2 h-4 data-vertical:self-auto"
            orientation="vertical"
          />
          <Skeleton className="h-5 w-36 rounded-sm" />
        </div>
      </div>
      <div className="grid h-full w-full place-items-center">
        <Spinner className="size-9" />
      </div>
    </SidebarInset>
  </>
)

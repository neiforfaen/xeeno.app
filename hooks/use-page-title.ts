import { usePathname } from "next/navigation"

type XeenoAppPath = "/dashboard" | `/dashboard/${string}`

const pathToTitleMap: Record<XeenoAppPath, string> = {
  "/dashboard": "dashboard",
  "/dashboard/exercises/react": "react exercises",
  "/dashboard/settings": "settings",
  "/dashboard/settings/account": "account settings",
}

export const usePageTitle = () => {
  const path = usePathname()
  return pathToTitleMap[path as XeenoAppPath]
}

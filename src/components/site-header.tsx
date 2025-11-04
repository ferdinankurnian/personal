import { useMatchRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { adminRoutes } from "@/data/admin-routes"
import { useTheme } from "@/components/theme-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "@tanstack/react-router"
import React from "react"
import { Moon, Sun } from "lucide-react"

interface NavItem {
  title: string
  url: string
  icon?: React.ElementType
  isExternal?: boolean
  subRoutes?: NavItem[]
}

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const matchRoute = useMatchRoute()

  const findActiveRoutePath = (routes: NavItem[]): NavItem[] => {
    for (const route of routes) {
      if (matchRoute({ to: route.url })) {
        return [route]
      }
      if (route.subRoutes) {
        const activeSubRoute = findActiveRoutePath(route.subRoutes)
        if (activeSubRoute.length > 0) {
          return [route, ...activeSubRoute]
        }
      }
    }
    return []
  }

  const activePath = findActiveRoutePath(adminRoutes)

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {activePath.length > 1 ? (
          <Breadcrumb>
            <BreadcrumbList>
              {activePath.map((route, index) => (
                <React.Fragment key={route.url}>
                  <BreadcrumbItem>
                    {index === activePath.length - 1 ? (
                      <BreadcrumbPage>{route.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={route.url}>{route.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < activePath.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : (
          <h1 className="text-base font-medium">
            {activePath[0]?.title || "Dashboard"}
          </h1>
        )}
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Sun className="w-12 h-12" />
            ) : (
              <Moon className="w-12 h-12" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
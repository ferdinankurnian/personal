import * as React from "react"
import {
  IconWorld,
  IconSettings
} from "@tabler/icons-react"

import { adminRoutes } from "@/data/admin-routes"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = {
  user: {
    name: "iydheko",
    email: "si admin",
    avatar: "https://github.com/ferdinankurnian.png",
  },
  navMain: adminRoutes.filter((route) => !["Fursona", "Social Media", "Settings", "Go to iydheko.site"].includes(route.title)),
  documents: adminRoutes.filter((route) => ["Fursona", "Social Media"].includes(route.title)).map(item => ({name: item.title, url: item.url, icon: item.icon})),
  navSecondary: adminRoutes.filter((route) => ["Go to iydheko.site", "Settings"].includes(route.title)),
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2 px-2">
            <span className="text-base font-semibold">iydheko</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationItems.navMain} />
        <NavDocuments items={navigationItems.documents} />
        <NavSecondary items={navigationItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navigationItems.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

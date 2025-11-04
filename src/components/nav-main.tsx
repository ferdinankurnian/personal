import { Link, useMatchRoute } from "@tanstack/react-router"
import { IconExternalLink, type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    isExternal?: boolean
  }[]
}) {
  const matchRoute = useMatchRoute()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            // Auto-detect active state kalo bukan external link
            const isActive = !item.isExternal && !!matchRoute({ to: item.url, fuzzy: true })

            if (item.isExternal) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={false}
                    tooltip={item.title}
                  >
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <IconExternalLink className="ml-auto" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                >
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
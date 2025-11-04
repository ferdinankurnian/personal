import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/_admin/ah-ini-admin-yh')({
  component: AdminLayout,
  handle: {
    breadcrumb: () => <span>Admin</span>,
  },
  head: () => ({
    meta: [
      {
        title: 'Admin Panelnya Ferdinan Iydheko',
      },
    ],
  }),
})

function AdminLayout() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="max-w-7xl w-full mx-auto px-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
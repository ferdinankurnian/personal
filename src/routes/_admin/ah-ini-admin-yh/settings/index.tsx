import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/ah-ini-admin-yh/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/ah-ini-admin-yh/settings/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ini-admin-yh/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div style={{ viewTransitionName: 'main-content' }}>Hello "/ini-admin-yh/"!</div>
}

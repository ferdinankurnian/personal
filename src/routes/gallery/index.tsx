import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div style={{ viewTransitionName: 'main-content' }}>Hello "/gallery/"!</div>
}

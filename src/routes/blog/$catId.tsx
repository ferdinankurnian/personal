import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$catId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/$catId"!</div>
}

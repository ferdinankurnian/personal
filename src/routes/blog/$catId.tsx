import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$catId')({
  component: RouteComponent,
  handle: {
    breadcrumb: (params) => <span>{params.catId}</span>,
  },
})

function RouteComponent() {
  return <div>Hello "/blog/$catId"!</div>
}

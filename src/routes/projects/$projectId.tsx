import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
  handle: {
    breadcrumb: (params) => <span>{params.projectId}</span>,
  },
})

function RouteComponent() {
  return <div>Hello "/projects/$projectId"!</div>
}

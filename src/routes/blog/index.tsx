import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-8" style={{ viewTransitionName: 'main-content' }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">Blogs</h1>
        <p className="text-center text-gray-400">
          Here are some of my blogs i created
        </p>
      </div>
    </div>
    )
}

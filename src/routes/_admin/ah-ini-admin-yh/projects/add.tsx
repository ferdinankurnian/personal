import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_admin/ah-ini-admin-yh/projects/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-row gap-4 p-4 md:gap-8 md:p-6">
      <textarea name="content" id="content" className="w-full h-full outline-0" placeholder="Tulis disini"></textarea>
      <div>
        <Button variant="default">Simpan</Button>
      </div>
    </div>
  )
}

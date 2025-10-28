import { createFileRoute } from '@tanstack/react-router'
import { Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemTitle } from '@/components/ui/item'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-8" style={{ viewTransitionName: 'main-content' }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-center text-gray-400">
          Here are some of my projects i created
        </p>
      </div>
      <ItemGroup className="grid gap-4">
        <Item variant="outline" className="p-8 max-w-full">
           <ItemHeader className="justify-start items-end gap-4">
            <div
              className="size-48 aspect-square rounded-lg bg-neutral-200"
            />
            <div className="space-y-1">
              <ItemTitle className="text-3xl font-semibold">Aridium</ItemTitle>
              <ItemDescription className="text-left text-lg mb-4">A time-sync lyrics creator</ItemDescription>
              <Button variant="outline">
                Learn More <ArrowUpRight />
              </Button>
            </div>
          </ItemHeader>
           <ItemContent className="max-w-6xl">
             <div className="overflow-x-auto min-w-0 max-w-full p-4 px-0 ">
               <div className="flex flex-row gap-4 w-max">
                 <div className="w-96 flex-shrink-0 rounded-md aspect-16/9 bg-neutral-200"></div>
                 <div className="w-96 flex-shrink-0 rounded-md aspect-16/9 bg-neutral-200"></div>
                 <div className="w-96 flex-shrink-0 rounded-md aspect-16/9 bg-neutral-200"></div>
                 <div className="w-96 flex-shrink-0 rounded-md aspect-16/9 bg-neutral-200"></div>
                 <div className="w-96 flex-shrink-0 rounded-md aspect-16/9 bg-neutral-200"></div>
               </div>
             </div>
             <span>Built with Electron and Vite</span>
           </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}

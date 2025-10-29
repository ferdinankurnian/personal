import { createFileRoute } from '@tanstack/react-router'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  SearchIcon,
} from "lucide-react"

export const Route = createFileRoute('/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-8" style={{ viewTransitionName: 'main-content' }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">Gallery</h1>
        <p className="text-center text-gray-400">
          Some media are here
        </p>
        <div className="grid w-full max-w-lg mx-auto mt-8 gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-1">
        <div className="bg-card aspect-square">1</div>
        <div className="bg-card aspect-square">2</div>
        <div className="bg-card aspect-square">3s</div>
      </div>
    </div>
    )
}

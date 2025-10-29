import { createFileRoute } from '@tanstack/react-router'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  SearchIcon,
} from "lucide-react"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { getPosts } from "@/lib/marble";
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
  loader: async () => {
    const data = await getPosts();
    return data;
  },
})

function RouteComponent() {
  const data = Route.useLoaderData();

  if (!data) return <div>No posts found</div>;

  return (
    <div className="max-w-6xl mx-auto py-20 space-y-8" style={{ viewTransitionName: 'main-content' }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">Blogs</h1>
        <p className="text-center text-gray-400">
          Here are some of my blogs i created
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
      <ItemGroup className="grid grid-cols-3 gap-4 items-start">
        {data.posts.map((post) => (
          <Item key={post.id} style={{ viewTransitionName: `post-${post.slug}` }} className="hover:border-primary/10 transition-colors">
            <Link to="/blog/post/$slug" params={{ slug: post.slug }} className="flex flex-col h-full">
              <ItemHeader>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  width={128}
                  height={128}
                  className="aspect-16/9 w-full object-cover"
                />
              </ItemHeader>
              <ItemContent className="py-2">
                <ItemTitle className="text-xl font-semibold">{post.title}</ItemTitle>
                <ItemDescription className="text-md text-primary/75">{post.description}</ItemDescription>
              </ItemContent>
            </Link>
          </Item>
        ))}
      </ItemGroup>
    </div>
    )
}

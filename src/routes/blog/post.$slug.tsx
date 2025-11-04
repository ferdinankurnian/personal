import { createFileRoute } from '@tanstack/react-router'
import { getSinglePost } from '@/lib/marble'
import { Prose } from '@/components/prose'
import { Link } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute("/blog/post/$slug")({
  component: RouteComponent,
  loader: async ({ params }: { params: { slug: string } }) => {
    const data = await getSinglePost({ data: params.slug });
    return data;
  },
  handle: {
    breadcrumb: (loaderData) => <span>{loaderData.post.title}</span>,
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();

  if (!data) return <div>No post found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-6xl font-bebas" style={{ viewTransitionName: `post-${data.post.id}` }}>{data.post.title}</h1>
        <p className="text-primary/75">
          {data.post.description}
        </p>
        <div className="flex h-5 mt-4 items-center space-x-4 text-sm">
          <div>{new Date(data.post.publishedAt).toDateString()}</div>
          <Separator orientation="vertical" />
          <Link to="/blog" className="font-semibold">{data.post.category.name}</Link>
        </div>
        <Separator className="my-4" />
        <div>
          <img src={data.post.coverImage} className="aspect-16/9 w-full object-cover" alt="Image" />
        </div>
        <Separator className="my-4" />
      </div>
      <Prose html={data.post.content} />
    </div>
  );
}

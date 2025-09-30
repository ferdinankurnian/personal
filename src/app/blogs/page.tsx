import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { getPosts } from "@/lib/marble";
import { Post } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

export default async function Blogs() {
  const postsData = await getPosts();
  const posts: Post[] = postsData ? postsData.posts : [];

  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-7xl p-4 mx-auto py-26 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold mb-8">Blogs</h1>
          <Card>
            <CardContent className="space-y-4">
              <div className="flex w-full items-center gap-2">
                <Input
                  className="h-11"
                  type="text"
                  placeholder="Search posts.."
                />
                <Button
                  type="submit"
                  variant="outline"
                  size="icon"
                  className="size-11"
                >
                  <Search className="size-6" />
                </Button>
              </div>
              <div className="flex w-full items-center gap-2">
                <h1 className="text-lg font-semibold">Categories</h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <Card className="p-0 overflow-hidden hover:-translate-y-1 transition-transform duration-100">
                <CardContent className="p-4 space-y-4">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full object-cover rounded-lg aspect-16/9"
                      width={300}
                      height={300}
                    />
                  ) : (
                    <div className="w-full bg-accent rounded-lg aspect-16/9" />
                  )}
                  <div className="p-2 space-y-3">
                    <h1 className="text-xl font-semibold line-clamp-2">
                      {post.title}
                    </h1>
                    <p className="text-black/60 dark:text-white/75 line-clamp-2 text-sm">
                      {post.description}
                    </p>
                    <p className="text-black/50 dark:text-white/75 text-sm">
                      {formatDistanceToNow(new Date(post.publishedAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

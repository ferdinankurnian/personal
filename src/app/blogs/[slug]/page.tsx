"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-4xl p-4 mx-auto pt-32 py-26 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            The title of this blog post is here for {slug}
          </h1>
          <p className="text-primary/50">11 September 2025</p>
        </div>
        <div className="bg-accent rounded-lg w-full aspect-16/9"></div>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl vel aliquam aliquet, nisl nisl aliquet nisl, vel
          aliquam nisl nisl vel nisl. Sed consectetur, nisl vel aliquam aliquet,
          nisl nisl aliquet nisl, vel aliquam nisl nisl vel nisl.
        </p>
      </div>
    </div>
  );
}

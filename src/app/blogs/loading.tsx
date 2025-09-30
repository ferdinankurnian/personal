"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:h-screen">
        <div className="md:max-w-7xl md:h-full md:p-20 py-20 px-4 md:pt-18 lg:p-24 xl:p-20 mx-auto flex flex-col lg:justify-center">
          <div className="flex flex-col lg:flex-row gap-4">
            <Skeleton className="w-72 h-full rounded-lg" />
            <div className="grow grid md:grid-cols-2 gap-4">
              <Skeleton className="md:col-span-2 aspect-21/9 rounded-lg" />
              <Skeleton className="aspect-16/9 rounded-lg" />
              <Skeleton className="aspect-16/9 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

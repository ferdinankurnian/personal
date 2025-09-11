"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { ResponsiveDialog } from "@/components/responsive-dialog";

export default function Gallery() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-7xl p-8 px-0 md:px-8 mx-auto py-26 space-y-8">
        <div className="px-4 md:px-0">
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
        <div className="grid grid-cols-3 bg-background gap-1 md:gap-2 p-1 md:grid-cols-4">
          {Array.from({ length: 32 }).map((_, index) => (
            <ResponsiveDialog
              key={index}
              content={
                <div className="grid md:grid-cols-2 overflow-auto px-4">
                  <Image
                    src="/iydheko.png"
                    alt="Iydheko"
                    className="w-full h-full object-cover rounded-md"
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold">Image {index + 1}</h2>
                    <p className="text-sm text-muted-foreground">
                      This is a beautiful image from my gallery.
                    </p>
                  </div>
                </div>
              }
            >
              <div className="hover:brightness-50 cursor-pointer">
                <Image
                  src="/iydheko.png"
                  alt="Iydheko"
                  className="w-full h-full object-cover"
                  layout="responsive"
                  width={300}
                  height={300}
                />
              </div>
            </ResponsiveDialog>
          ))}
        </div>
      </div>
    </div>
  );
}

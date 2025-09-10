"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import PixelTransition from "@/components/PixelTransition";

export default function Gallery() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-7xl p-8 px-0 md:px-8 mx-auto pt-32 space-y-8">
        <div className="px-4 md:px-0">
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
        <div className="grid grid-cols-3 bg-neutral-200 dark:bg-background gap-1 p-1 md:grid-cols-4">
          {Array.from({ length: 32 }).map((_, index) => (
            <PixelTransition
              key={index}
              firstContent={
                <Image
                  src="/iydheko.png"
                  alt="Iydheko"
                  className="w-full h-full object-cover"
                  layout="responsive"
                  width={300}
                  height={300}
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-[#37729A50]">
                  <p className="m-2 text-white text-2xl font-bold">
                    The First Journey
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#7CB0DA"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

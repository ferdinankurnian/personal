"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-7xl p-8 mx-auto pt-32">
        <h1 className="text-4xl font-bold mb-8">Blogs</h1>
        <div className="grid grid-cols-4">
          {Array.from({ length: 32 }).map((_, index) => (
            <Card key={index} className="p-0 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/iydheko.png"
                  alt="Iydheko"
                  className="w-full h-full object-cover aspect-16/9"
                  layout="responsive"
                  width={300}
                  height={300}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

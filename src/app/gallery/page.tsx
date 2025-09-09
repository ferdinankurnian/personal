"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="max-w-7xl p-8 mx-auto grid grid-cols-4 gap-4 pt-32">
        {Array.from({ length: 32 }).map((_, index) => (
          <Card key={index} className="p-0 overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/iydheko.png"
                alt="Iydheko"
                className="w-full h-full object-cover"
                layout="responsive"
                width={300}
                height={300}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

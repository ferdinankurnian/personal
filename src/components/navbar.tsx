"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = () => [
    {
      title: "Home",
      address: "/",
    },
    {
      title: "My Projects",
      address: "/projects",
    },
    {
      title: "Blogs",
      address: "/blogs",
    },
    {
      title: "Gallery",
      address: "/gallery",
    },
  ];

  return (
    <div className="flex flex-row justify-between md:justify-center p-2 space-x-2 z-50 w-screen md:w-fit fixed dark:bg-black/40 md:rounded-xl border-bottom md:border backdrop-blur-sm md:top-2 left-1/2 -translate-x-1/2">
      <div className="flex flex-row items-center">
        {navLinks().map((link) => (
          <Link href={link.address} key={link.address}>
            <Button
              variant="nav_link"
              size="nav"
              className={cn(
                pathname === link.address && "text-black dark:text-white",
              )}
            >
              {link.title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun />
        </Button>
      </div>
    </div>
  );
}

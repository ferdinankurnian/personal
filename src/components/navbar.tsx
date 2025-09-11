"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitch } from "@/components/theme-switch";

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

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between md:justify-center p-2 space-x-2 z-50 w-screen md:w-fit fixed dark:bg-black/40 md:rounded-xl border-b md:border backdrop-blur-sm md:top-2 left-1/2 -translate-x-1/2">
      <h1 className="text-lg font-bold text-primary md:hidden my-auto pl-2">
        {navLinks().find((link) => link.address === pathname)?.title ||
          pathname}
      </h1>
      <div className="hidden md:flex flex-row items-center">
        <Core />
      </div>
      <div className="flex flex-row gap-2">
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex md:justify-center"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun />
        </Button>
        <SheetMenu />
      </div>
    </div>
  );
}

function SheetMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="px-0">
          <SheetTitle className="pl-6 -mt-1 mb-2">Menu</SheetTitle>
          <Separator />
          <div className="flex flex-col -mt-[0.4rem]">
            <Core style="mobile" />
            <div
              className="flex justify-between items-center px-6 py-3 hover:bg-accent text-lg cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              Theme: <ThemeSwitch />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

interface CoreProps {
  style?: string;
}

function Core({ style }: CoreProps) {
  const pathname = usePathname();

  if (style == "mobile") {
    return (
      <>
        {navLinks().map((link) => (
          <Link href={link.address} key={link.address}>
            <div
              className={cn(
                "px-6 py-3 hover:bg-accent text-lg hover:pl-8 transition-all duration-300",
                (pathname === link.address ||
                (link.address !== "/" && pathname.startsWith(link.address)))
                  ? "font-bold text-black dark:text-white"
                  : "font-normal text-primary/75",
              )}
            >
              {link.title}
            </div>
          </Link>
        ))}
        <Separator />
      </>
    );
  }

  return (
    <>
      {navLinks().map((link) => (
        <Link href={link.address} key={link.address}>
          <Button
            variant="nav_link"
            size="nav"
            className={cn(
              (pathname === link.address ||
                (link.address !== "/" && pathname.startsWith(link.address))) &&
                "text-black dark:text-white",
            )}
          >
            {link.title}
          </Button>
        </Link>
      ))}
    </>
  );
}

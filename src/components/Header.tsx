import { Link, useNavigate } from '@tanstack/react-router'
import {
  Menu,
  MoonStar,
  Sun,
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Twitter } from '@/components/ui/svgs/twitter'
import { GithubDark } from '@/components/ui/svgs/githubDark'
import { useTheme } from './theme-provider'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export default function Header() {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  const handleNavigation = (to: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate({ to })
      })
    } else {
      navigate({ to })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className="p-2 px-6 grid grid-cols-2 md:grid-cols-3 items-center sticky top-0 z-50 text-primary" style={{ viewTransitionName: 'header' }}>
        <div
          className="absolute -z-1 bg-gradient-to-b from-background via-background/60 via-[70%] to-blue-400/0 w-full h-full"
        ></div>
        <h1 className="text-xl font-bold whitespace-nowrap">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
            Ferdinan Iydheko
          </Link>
        </h1>
        <Sheet>
          <SheetTrigger className="flex flex-row gap-2 md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Ferdinan Iydheko</SheetTitle>
              <SheetDescription>
                boot up. get some fresh.
              </SheetDescription>
            </SheetHeader>
            <div className="grid px-4 gap-2 items-start">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Home</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/projects" onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}>Projects</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/blog" onClick={(e) => { e.preventDefault(); handleNavigation('/blog'); }}>Blog</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/gallery" onClick={(e) => { e.preventDefault(); handleNavigation('/gallery'); }}>Gallery</Link>
              </Button>
            </div>
            <SheetFooter>
              <div className="flex flex-row gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com/iydheko" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/ferdinankurnian" target="_blank" rel="noopener noreferrer">
                    <GithubDark />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="ml-auto" onClick={toggleTheme}>
                  {theme === 'dark' ? <MoonStar /> : <Sun />}
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-row gap-2 hidden md:flex mx-auto">
          <Button variant="ghost" asChild>
            <Link to="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/projects" onClick={(e) => { e.preventDefault(); handleNavigation('/projects'); }}>Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/blog" onClick={(e) => { e.preventDefault(); handleNavigation('/blog'); }}>Blog</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/gallery" onClick={(e) => { e.preventDefault(); handleNavigation('/gallery'); }}>Gallery</Link>
          </Button>
        </div>
        <div className="flex flex-row gap-2 hidden md:flex ml-auto">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/iydheko" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ferdinankurnian" target="_blank" rel="noopener noreferrer">
              <GithubDark />
            </a>
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <MoonStar /> : <Sun />}
          </Button>
           
        </div>
      </header>
    </>
  )
}

 import { Link, useNavigate } from '@tanstack/react-router'


 import {
   MoonStar,
   Sun,
 } from 'lucide-react'
 import { Button } from "@/components/ui/button"
 import { Twitter } from '@/components/ui/svgs/twitter'
 import { GithubDark } from '@/components/ui/svgs/githubDark'
 import { useTheme } from './theme-provider'

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
      <header className="p-2 px-6 grid grid-cols-3 items-center sticky top-0 z-50 bg-background/50 backdrop-blur-xs text-primary" style={{ viewTransitionName: 'header' }}>

        <h1 className="text-xl font-bold">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
            Ferdinan Iydheko
          </Link>
        </h1>


        <div className="flex flex-row gap-2 hidden lg:flex mx-auto">
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
        <div className="flex flex-row gap-2 hidden lg:flex ml-auto">
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

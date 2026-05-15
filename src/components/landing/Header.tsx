import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold">My Brand</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        </nav>
        <Link to="/contact">
          <Button size="sm">Contact</Button>
        </Link>
      </div>
    </header>
  )
}

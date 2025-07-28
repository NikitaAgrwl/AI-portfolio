import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-surface/95 backdrop-blur-sm border-b border-portfolio-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-portfolio-accent">PORTFOLIO</h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors">
              About
            </a>
            <a href="#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors">
              Resume
            </a>
            <a href="#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors">
              Project
            </a>
            <Button variant="outline" size="sm" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg">
              Download CV
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" className="text-portfolio-text">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
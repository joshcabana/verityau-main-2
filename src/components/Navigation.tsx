import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[hsl(var(--ink))]/95 backdrop-blur-xl border-b border-white/10 shadow-elegant"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center transition-smooth group-hover:bg-accent/20 group-hover:border-accent/40">
              <Heart className="h-6 w-6 text-accent fill-accent" />
            </div>
            <span className="hero-text text-xl text-white">Verity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-white/70 hover:text-accent transition-smooth"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-white/70 hover:text-accent transition-smooth"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("safety")}
              className="text-sm font-medium text-white/70 hover:text-accent transition-smooth"
            >
              Safety
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-white/70 hover:text-accent transition-smooth"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA Button */}
          <Button asChild size="default" className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-gold transition-smooth">
            <Link to="/auth">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[hsl(var(--ink))]/95 backdrop-blur-xl border-b border-white/10 shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left py-3 px-4 text-base font-medium text-white hover:bg-white/5 hover:text-accent rounded-lg transition-smooth"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left py-3 px-4 text-base font-medium text-white hover:bg-white/5 hover:text-accent rounded-lg transition-smooth"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("safety")}
                className="block w-full text-left py-3 px-4 text-base font-medium text-white hover:bg-white/5 hover:text-accent rounded-lg transition-smooth"
              >
                Safety
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left py-3 px-4 text-base font-medium text-white hover:bg-white/5 hover:text-accent rounded-lg transition-smooth"
              >
                FAQ
              </button>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full mt-4 transition-smooth">
                <Link to="/auth">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

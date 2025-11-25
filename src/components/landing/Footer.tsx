import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <span
              className="hero-text text-3xl md:text-4xl font-bold text-accent"
            >
              Verity
            </span>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-primary-foreground/60 text-sm md:text-base">
            <Link to="/privacy" className="gold-underline hover:text-accent transition-smooth">
              Privacy
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <Link to="/terms" className="gold-underline hover:text-accent transition-smooth">
              Terms
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <Link to="/admin" className="gold-underline hover:text-accent transition-smooth">
              Admin
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="gold-underline hover:text-accent transition-smooth">
              Instagram
            </a>
            <span className="text-primary-foreground/40">·</span>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="gold-underline hover:text-accent transition-smooth">
              TikTok
            </a>
            <span className="text-primary-foreground/40">·</span>
            <a href="mailto:hello@verity.au" className="gold-underline hover:text-accent transition-smooth">
              hello@verity.au
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="flex-shrink-0 text-primary-foreground/50 text-sm md:text-base text-center md:text-right">
            Made with frustration and love in Canberra © 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

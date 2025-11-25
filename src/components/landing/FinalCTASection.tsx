import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion";

export const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-40 px-4 bg-accent overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))]" />

      <ScrollReveal className="relative max-w-5xl mx-auto text-center">
        {/* Massive Headline */}
        <h2 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-ink mb-8 sm:mb-12 md:mb-16">
          Ready to date someone real?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="h-16 md:h-20 px-12 md:px-16 text-base md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:scale-105 shadow-elegant transition-smooth rounded-full"
          >
            <Link to="/auth?mode=signup">Create Your Profile</Link>
          </Button>
        </div>

        {/* Small Text */}
        <p className="body-base text-ink/80 mt-8">
          Free to join · Video dates included · No catfishing, ever.
        </p>
      </ScrollReveal>
    </section>
  );
};

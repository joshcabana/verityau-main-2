import { ScrollReveal } from "@/components/motion";
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-40 px-4 bg-accent overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))]" />

      <ScrollReveal className="relative max-w-5xl mx-auto text-center">
        {/* Massive Headline */}
        <h2 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-ink mb-8 sm:mb-12 md:mb-16">
          Be the first to date someone real.
        </h2>

        {/* Email Form */}
        <WaitlistForm variant="final-cta" />

        {/* Small Launch Text */}
        <p className="body-base text-ink/80 mt-8">
          Launching January 2026 in Canberra—because this city deserves something better.
        </p>
      </ScrollReveal>
    </section>
  );
};

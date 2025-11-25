import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { spring } from "@/lib/motion";
import { WaitlistForm } from "./WaitlistForm";
import { AnimatedCounter } from "./AnimatedCounter";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-base">
      {/* Gold vignette overlay */}
      <div className="absolute inset-0 hero-gold-vignette" />

      {/* Film grain texture */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content box */}
      <StaggerContainer className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Badge with counter */}
        <StaggerItem>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-medium text-white/80">
              <AnimatedCounter target={18274} /> Australians choosing real connection
            </span>
          </div>
        </StaggerItem>

        {/* Headline */}
        <StaggerItem>
          <h1 className="hero-text text-7xl md:text-9xl mb-6 text-white">
            Dating,
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold))] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              Face First.
            </motion.span>
          </h1>
        </StaggerItem>

        {/* Subtext */}
        <StaggerItem>
          <p className="body-large text-white/70 mb-12 max-w-3xl mx-auto">
            No more guessing. No more wasted weeks.
            <br />
            <span className="font-semibold text-white">Match. Video date. Decide together.</span>
          </p>
        </StaggerItem>

        {/* CTA */}
        <StaggerItem>
          <div className="flex flex-col items-center gap-4 mb-8">
            <WaitlistForm variant="hero" />

            {/* Small social sharing - less prominent */}
            <div className="flex gap-3">
              {/* SocialShareButtons already included in WaitlistForm for hero variant */}
            </div>
          </div>
        </StaggerItem>

        {/* Launch info */}
        <StaggerItem>
          <p className="text-sm text-white/50">
            Launching January 2026 · Early members receive lifetime unlimited dates
          </p>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { SignupCTA } from "./SignupCTA";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-base">
      {/* Gold vignette overlay */}
      <div className="absolute inset-0 hero-gold-vignette" />

      {/* Film grain texture */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content box */}
      <StaggerContainer className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Headline */}
        <StaggerItem>
          <h1 className="hero-text text-7xl md:text-9xl mb-6 text-white">
            Real People.
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold))] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              Real Time.
            </motion.span>
          </h1>
        </StaggerItem>

        {/* Subtext */}
        <StaggerItem>
          <p className="body-large text-white/70 mb-12 max-w-3xl mx-auto">
            A dating experience built on presence, not profiles.
          </p>
        </StaggerItem>

        {/* CTA */}
        <StaggerItem>
          <SignupCTA variant="hero" />
        </StaggerItem>

        {/* Tagline */}
        <StaggerItem>
          <p className="text-sm text-white/50 mt-8">
            Video-first dating · Now live in Australia
          </p>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

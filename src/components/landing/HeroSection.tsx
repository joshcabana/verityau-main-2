import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion";

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
            No Swiping,
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold))] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              Dates Only
            </motion.span>
          </h1>
        </StaggerItem>

        {/* Subtext */}
        <StaggerItem>
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto italic font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            Verified faces, a 30-second intro video, and your first real conversation on a 10-minute date. No filters. No ghosts. Just you, them, and the truth — unlock chat only if the chemistry hits.
          </motion.p>
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

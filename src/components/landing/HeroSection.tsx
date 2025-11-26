import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-base">
      {/* Gold vignette overlay */}
      <div className="absolute inset-0 hero-gold-vignette" />

      {/* Film grain texture */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content box */}
      <StaggerContainer className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20">
        {/* Headline */}
        <StaggerItem>
          <motion.h1 
            className="hero-text text-6xl md:text-8xl lg:text-9xl mb-8 text-white leading-[0.95]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Dating Apps Are a{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
              Circus of Lies
            </span>
            <br />
            <span className="text-white/90">Verity Is the Exit Door.</span>
          </motion.h1>
        </StaggerItem>

        {/* Subtext */}
        <StaggerItem>
          <motion.div
            className="max-w-4xl mx-auto space-y-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              <span className="text-accent font-medium">54% of profiles are basically fan fiction</span> (Pew Research, 2025). You swipe for hours, match with a catfish, and spend weeks texting someone who ghosts faster than your New Year's resolutions.
            </p>
            <p className="text-lg md:text-xl text-white/70 italic">
              On Verity, we skip the clown show: Verified faces, a 30-second intro video, and a 10-minute date that outs the fakers before you waste a single emoji.
          </p>
          </motion.div>
        </StaggerItem>

        {/* CTA Buttons */}
        <StaggerItem>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="h-16 px-12 text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-gold hover:shadow-elegant hover:scale-105 transition-all"
            >
              <Link to="/auth?mode=signup">Skip the Swipe Trap</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-12 text-xl font-bold border-white/20 text-white hover:bg-white/5 hover:border-accent/40 rounded-full transition-all"
            >
              <a href="#brutal-truth">See the Receipts</a>
            </Button>
          </motion.div>
        </StaggerItem>

        {/* Tagline */}
        <StaggerItem>
          <p className="text-sm text-white/50 mt-4 italic">
            Because life's too short for "haha wyd?" — and even shorter for bad dates.
          </p>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

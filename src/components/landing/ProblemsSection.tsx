import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { spring } from "@/lib/motion";
import { OptimizedImage } from "@/components/OptimizedImage";
import heartVideoIcon from "@/assets/heart-video-icon.png";

export const ProblemsSection = () => {
  return (
    <section className="py-24 px-4 relative bg-[hsl(var(--grey-100))]">
      {/* Line illustration decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 hidden lg:block">
        <OptimizedImage
          src={heartVideoIcon}
          alt=""
          className="w-full h-full"
          showLoadingState={false}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <ScrollReveal>
          <h2 className="section-header text-4xl md:text-[64px] text-center mb-20 text-white">
            Modern dating wasn't built for real people.
          </h2>
        </ScrollReveal>

        {/* Three Cards - Tired Of? */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <StaggerItem>
            <motion.div
              className="bg-white/5 border border-white/10 rounded-lg p-10 shadow-elegant hover:border-accent/30 hover:shadow-gold transition-smooth h-full"
              whileHover={{ scale: 1.02, transition: spring.gentle }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="body-large text-white">
                Filtered photos. Curated personas.
                <br />
                Then you meet—and they&apos;re someone else entirely.
              </p>
              <p className="text-accent font-semibold mt-6 text-lg">
                → On Verity, you see each other first.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-white/5 border border-white/10 rounded-lg p-10 shadow-elegant hover:border-accent/30 hover:shadow-gold transition-smooth h-full"
              whileHover={{ scale: 1.02, transition: spring.gentle }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="body-large text-white">
                Weeks of small talk. Momentum lost.
                <br />
                A conversation that never becomes a date.
              </p>
              <p className="text-accent font-semibold mt-6 text-lg">
                → On Verity, the date comes first.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-white/5 border border-white/10 rounded-lg p-10 shadow-elegant hover:border-accent/30 hover:shadow-gold transition-smooth h-full"
              whileHover={{ scale: 1.02, transition: spring.gentle }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="body-large text-white">
                You drive across town. No spark. Awkward goodbye.
                <br />
                An evening you&apos;ll never get back.
              </p>
              <p className="text-accent font-semibold mt-6 text-lg">
                → On Verity, ten minutes from your couch tells you everything.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bold Text */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-2xl md:text-3xl font-bold text-accent leading-relaxed">
            Match. Ten-minute video date. If you both feel it, chat unlocks.<br />
            <span className="text-white/60 text-xl font-normal">Simple. Honest. No games.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

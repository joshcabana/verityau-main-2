import { memo } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion";
import { spring } from "@/lib/motion";
import { Heart, Video, CheckCircle2, MessageCircle, Shield, MapPin } from "lucide-react";

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-[hsl(var(--ink))] relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-header text-4xl md:text-[64px] text-center mb-12 text-white">
            Designed for intention.
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="body-large text-white/70 mb-8">
              Every detail serves one purpose: helping you find someone worth your time.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video-First Matching</h3>
                <p className="text-white/60">Real faces before real feelings. No filters. No surprises.</p>
              </motion.div>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <Video className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ten-Minute Video Dates</h3>
                <p className="text-white/60">Enough time to feel chemistry. Not enough to waste an evening.</p>
              </motion.div>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Verified Profiles</h3>
                <p className="text-white/60">Every user confirmed with a live selfie video. Always real.</p>
              </motion.div>

              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Mutual Interest Required</h3>
                <p className="text-white/60">Chat only unlocks when both people say yes. Respect built in.</p>
              </motion.div>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Safety by Design</h3>
                <p className="text-white/60">Emergency exit, screenshot blocking, instant reporting. Peace of mind.</p>
              </motion.div>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-smooth"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Starting in Canberra</h3>
                <p className="text-white/60">Built for our city first. Local connections, intentional design.</p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

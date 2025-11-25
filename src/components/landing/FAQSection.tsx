import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-[hsl(var(--ink))] relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-header text-4xl md:text-[64px] text-center mb-16 text-white">
            Questions? Here&apos;s clarity.
          </h2>
          <StaggerContainer className="space-y-6" staggerDelay="fast">
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  How does Verity work?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Match with someone. Have a ten-minute video date. If you both say yes, chat unlocks. No endless messaging. Just real momentum.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  When does Verity launch?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  January 2026, starting in Canberra. Join the waitlist to be first.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Is Verity free?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Free members get five video dates per month. Verity Plus unlocks unlimited dates and premium features.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  More questions?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  We&apos;d love to hear from you.{" "}
                  <a href="mailto:hello@verity.au" className="text-accent hover:text-accent/80 transition-smooth font-semibold">
                    hello@verity.au
                  </a>
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
};

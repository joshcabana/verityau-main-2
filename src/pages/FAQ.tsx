import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--ink))]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 md:py-32">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-8 -ml-2 text-white hover:text-accent hover:bg-white/5 transition-smooth">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <ScrollReveal>
          <h1 className="section-header text-4xl md:text-[64px] text-center mb-16 text-white">
            Questions? Here's clarity.
          </h1>
          <StaggerContainer className="space-y-6" staggerDelay="fast">
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  How does Verity work?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Match with someone. Have a ten-minute video date. If you both say yes, chat unlocks. No endless messaging. Just real momentum toward meeting in person.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What makes Verity different from other dating apps?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Other apps optimise for time spent scrolling. Verity optimises for time spent connecting. One video date tells you more than a hundred messages ever could.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What happens during a video date?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  You and your match join a split-screen video call for ten minutes. We provide conversation starters if you need them. At the end, you both privately decide: yes or no. If it's mutual, chat unlocks.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Is Verity free?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Yes. Free members get five video dates per month—enough to find real connection. Verity Plus unlocks unlimited dates and premium features like advanced filters.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Where is Verity available?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Verity is live across Australia. Create your profile and start connecting with real people near you.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What if someone is inappropriate during a call?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Tap the emergency exit button to leave instantly. Our team reviews reports within minutes, and we have zero tolerance for misconduct. Your safety is our foundation.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  How do you verify profiles?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Every user records a live selfie video that we match against their photos. No stock images. No catfishing. What you see is who you'll meet.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  More questions?
                </h4>
                <p className="text-white/70 leading-relaxed">
                  We'd love to hear from you.{" "}
                  <a href="mailto:hello@verity.au" className="text-accent hover:text-accent/80 transition-smooth font-semibold">
                    hello@verity.au
                  </a>
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FAQ;

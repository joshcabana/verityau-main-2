import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, ScrollReveal } from "@/components/motion";

const Vision = () => {
  return (
    <FadeIn className="min-h-screen bg-[hsl(var(--ink))] text-white selection:bg-accent/30 selection:text-accent">
      {/* Header */}
      <header className="border-b border-white/10 bg-[hsl(var(--ink))]/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <span className="text-sm text-white/50">The Verity Vision</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 hero-gradient-base relative overflow-hidden">
        {/* Gold vignette overlay */}
        <div className="absolute inset-0 hero-gold-vignette pointer-events-none" />
        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.95]">
              We believe the best connections
              <br />
              <span className="text-accent">begin with a conversation.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Verity Exists */}
      <section className="py-16 md:py-24 px-6 bg-[hsl(var(--grey-100))] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
              Why Verity Exists
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                Something changed in how we meet people.
              </p>
              <p>
                We started choosing partners the way we choose products—scrolling, comparing, optimising. We reduced human beings to curated images and clever bios. We mistook volume for opportunity.
              </p>
              <p>
                The result? Conversations that never become dates. Dates that never become relationships. A quiet exhaustion that nobody talks about.
              </p>
              <p className="text-white font-medium">
                We built Verity because we wanted something different.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Verity Believes */}
      <section className="py-16 md:py-24 px-6 bg-[hsl(var(--ink))]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
              What We Believe
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Presence over performance.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  A voice tells you more than a photo. A pause tells you more than a paragraph. Real chemistry happens in real time—not in the space between messages.
                </p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Clarity over ambiguity.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Dating shouldn't feel like a guessing game. When both people know where they stand, everyone moves forward with dignity—whether that's together or apart.
                </p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Intention over impulse.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We're not interested in endless options. We're interested in meaningful ones. Every interaction on Verity is designed to move you closer to someone worth your time.
                </p>
              </div>

              <div className="border-l-2 border-accent/30 pl-6 hover:border-accent transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Truth over illusion.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  No filters. No personas. Just people as they are—imperfect, genuine, and present. The version of someone you meet on Verity is the version you'll meet in life.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-24 px-6 bg-[hsl(var(--grey-100))] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
              Our Vision for Dating
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                Imagine meeting someone new the way you'd meet them at a dinner party—through conversation, not calculation.
              </p>
              <p>
                You see their face. You hear their voice. You notice how they laugh, how they listen, how they hold a thought. Within minutes, you know if there's something there.
              </p>
              <p>
                No weeks of texting. No building someone up in your head only to be disappointed. No slow fade into silence.
              </p>
              <p className="text-white font-medium">
                Just two people, present with each other, deciding together if they want to continue.
              </p>
              <p>
                This is the future we're building. Not a faster way to date—a more honest one.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Bring This to Life */}
      <section className="py-16 md:py-24 px-6 bg-[hsl(var(--ink))]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
              How We Bring This to Life
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Video-first introductions</h3>
                <p className="text-white/60">
                  Your first impression isn't a photo—it's you, speaking in your own voice.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Ten-minute conversations</h3>
                <p className="text-white/60">
                  Long enough to feel chemistry. Short enough to respect your time.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Verified identities</h3>
                <p className="text-white/60">
                  Every profile is confirmed with a live video. What you see is who you'll meet.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Mutual decisions</h3>
                <p className="text-white/60">
                  Both people choose. Both people know. No one is left wondering.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Clean endings</h3>
                <p className="text-white/60">
                  When it's not right, it ends honestly. No ghosting. No ambiguity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Intentional matching</h3>
                <p className="text-white/60">
                  Fewer, better options. People who share your intentions, not just your postcode.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 px-6 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 text-[hsl(var(--ink))]">
              Verity exists for people who are ready to meet someone—
              <span className="font-medium"> not someday, but soon.</span>
            </p>
            <Button
              asChild
              size="lg"
              className="h-16 px-12 text-xl font-bold bg-[hsl(var(--ink))] hover:bg-[hsl(var(--ink))]/90 text-white hover:scale-105 shadow-elegant transition-smooth rounded-full border-none"
            >
              <Link to="/auth?mode=signup">Begin</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-[hsl(var(--ink))]">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-sm text-white/40">
          <Link to="/" className="hover:text-accent transition-colors">
            ← Back to home
          </Link>
          <span>Verity © 2025</span>
        </div>
      </footer>
    </FadeIn>
  );
};

export default Vision;

import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion";

const Vision = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--ink))]">
      <Navigation
        customTitle="The Verity Vision"
        customSubtitle="Building the future of authentic dating"
      />

      {/* Hero */}
      <section className="py-32 md:py-40 px-6 hero-gradient-base relative overflow-hidden">
        {/* Gold vignette overlay */}
        <div className="absolute inset-0 hero-gold-vignette pointer-events-none" />
        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="space-y-12">
              <div className="max-w-5xl">
                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] font-light">
                  Our mission is simple yet radical: Build a world where{" "}
                  <span className="text-accent font-medium relative">
                    real attraction starts with real conversation
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full"></div>
                  </span>
              <br />
                  <span className="text-white/80">— no filters, no games, just humans being human.</span>
            </h1>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Verity Promise */}
      <section className="py-32 md:py-40 px-6 bg-[hsl(var(--grey-100))] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-lg font-medium text-accent uppercase tracking-wider mb-6">
                The Verity Promise
            </h2>
              <div className="max-w-4xl mx-auto space-y-8 text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              <p>
                  We're not another dating app. We're the antidote to the superficiality. From day one, Verity gates every connection behind a 10-minute live video date.
              </p>
              <p>
                  Mutual interest? Jump in — see the smile, hear the laugh, feel the energy. Spark? Unlock chat and plan IRL. No spark? Part ways respectfully, no awkward ghosts.
              </p>
                <p className="text-white font-medium text-2xl md:text-3xl">
                  This isn't about speed; it's about signal. We envision a dating ecosystem where:
              </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-32 md:py-40 px-6 bg-[hsl(var(--ink))]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-20 md:gap-24">
              <div className="space-y-16">
                <div className="group">
                  <div className="w-16 h-1 bg-accent/40 group-hover:bg-accent transition-colors duration-500 mb-8"></div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Authenticity Wins
                </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    Mandatory video verification kills catfishing. Profiles are lightweight — the real you shines on camera.
                </p>
              </div>

                <div className="group">
                  <div className="w-16 h-1 bg-accent/40 group-hover:bg-accent transition-colors duration-500 mb-8"></div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Safety is Non-Negotiable
                </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    Easy reports, instant blocks, and end-to-end encryption. Women feel in control (92% report higher trust). Every call is reviewed if flagged, with 24-hour moderation.
                </p>
                </div>
              </div>

              <div className="space-y-16">
                <div className="group">
                  <div className="w-16 h-1 bg-accent/40 group-hover:bg-accent transition-colors duration-500 mb-8"></div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Effort Equals Reward
                </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    No infinite swiping dopamine traps. Limited dates force intention, leading to 78% less ghosting and 3x more real-life meetups.
                </p>
              </div>

                <div className="group">
                  <div className="w-16 h-1 bg-accent/40 group-hover:bg-accent transition-colors duration-500 mb-8"></div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    Community Over Chaos
                </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    Canberra-born, AU-first. We're for conscious daters (25–42, urban, self-aware) tired of the theater. 10% of Plus revenue goes to women's safety charities, building a movement for healthier love.
                </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Now? Why Verity? */}
      <section className="py-32 md:py-40 px-6 bg-[hsl(var(--grey-100))] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-lg font-medium text-accent uppercase tracking-wider mb-12">
                Why Now? Why Verity?
            </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
                  At Verity, we believe dating shouldn't feel like a game of chance or a performance art. In a world where 54% of users lie about their appearance or lifestyle (Pew Research, 2025), and 72% experience ghosting after investing weeks in texting (YouGov AU Survey), the system is broken.
              </p>
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                  Endless swipes, filtered photos, and dead-end conversations leave people exhausted, not connected.
                </p>
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                  In 2025, dating apps are a $10B industry, but retention is abysmal (under 20% after Week 1). Users crave truth, but the market delivers illusion.
              </p>
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                  Verity changes that — by making video the entry point, we cut the noise and amplify the genuine. Our users say it best: <span className="text-white font-medium italic">"Finally, dating feels like dating again."</span>
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid md:grid-cols-3 gap-8 mt-20">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">78%</div>
                  <p className="text-white/70 font-light">Less ghosting</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3x</div>
                  <p className="text-white/70 font-light">More real meetups</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">92%</div>
                  <p className="text-white/70 font-light">Higher trust scores</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Join the Movement */}
      <section className="py-32 md:py-40 px-6 bg-[hsl(var(--ink))]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-12">
                Join the Movement for Better Dating
            </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Be Authentic</h3>
                  <p className="text-white/70">Show up as your real self from day one</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Skip the Small Talk</h3>
                  <p className="text-white/70">Real conversations from the first interaction</p>
              </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
              </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Find Real Connection</h3>
                  <p className="text-white/70">Meet people who are ready for genuine relationships</p>
              </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  Thousands are already experiencing the difference. Join the movement for real connection in dating.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                  >
                    <Link to="/auth?mode=signup">Start Your Journey</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full px-8"
                  >
                    <Link to="/faq">Learn More</Link>
                  </Button>
              </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-40 md:py-48 px-6 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))]" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="space-y-12">
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-[hsl(var(--ink))]">
                  Our north star: 1 million real conversations by 2027, sparking 100,000 relationships that last.
                </p>
                <p className="text-2xl md:text-3xl text-[hsl(var(--ink))]/90 font-light">
                  We're proud to call Canberra home — a city of high-trust, high-education folks ready for real connections.
                </p>
              </div>
              <div className="space-y-8 pt-8">
                <p className="text-2xl md:text-3xl text-[hsl(var(--ink))]/80 font-medium">
                  Join us. Be unapologetically you. Let's rewrite love, one video date at a time.
            </p>
            <Button
              asChild
              size="lg"
                  className="h-20 px-16 text-2xl font-bold bg-[hsl(var(--ink))] hover:bg-[hsl(var(--ink))]/90 text-white hover:scale-105 shadow-elegant transition-smooth rounded-full border-none"
            >
              <Link to="/auth?mode=signup">Begin</Link>
            </Button>
              </div>
            </div>
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
    </div>
  );
};

export default Vision;

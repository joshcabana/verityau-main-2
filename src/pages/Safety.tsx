import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Eye, Lock, Users, AlertTriangle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const Safety = () => {
  return (
    <FadeIn className="min-h-screen bg-[hsl(var(--ink))] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[hsl(var(--ink))]/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold text-white">Safety at Verity</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[hsl(var(--grey-100))] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Safety isn&apos;t a feature.
              <br />
              <span className="text-accent">It&apos;s the foundation.</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We verify every user and protect every interaction—so you can relax, be yourself, and focus on finding real connection.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-[hsl(var(--ink))]">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Verification */}
            <StaggerItem>
              <div className="bg-[hsl(var(--grey-100))]/50 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Verification</h3>
                <p className="text-white/70 mb-6">
                  Every profile on Verity is verified. No exceptions.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Live selfie video</strong> — Required for every user. We match your video to your photos in real-time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Optional ID verification</strong> — For users who want an extra trust badge on their profile.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Reverse image detection</strong> — We scan for stolen photos and stock images.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">No anonymous profiles</strong> — Every account is tied to a verified identity.</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            {/* During Dates */}
            <StaggerItem>
              <div className="bg-[hsl(var(--grey-100))]/50 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">During Video Dates</h3>
                <p className="text-white/70 mb-6">
                  You&apos;re always in control during your video dates.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Emergency exit button</strong> — Leave any call instantly with one tap. No explanation needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Screenshot blocking</strong> — We detect and prevent screenshot attempts during calls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Post-date check-ins</strong> — We follow up after every date to make sure you felt safe.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">One-tap reporting</strong> — Report inappropriate behaviour during or after a call.</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            {/* Moderation */}
            <StaggerItem>
              <div className="bg-[hsl(var(--grey-100))]/50 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Moderation</h3>
                <p className="text-white/70 mb-6">
                  Our team works around the clock to keep Verity safe.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">AI-assisted detection</strong> — Automated systems flag suspicious behaviour before it reaches you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">24/7 human review</strong> — Real people review every report. No automated dismissals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Zero tolerance policy</strong> — Harassment, hate speech, and inappropriate behaviour result in permanent bans.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Quality-first profiles</strong> — We review profiles for authenticity and remove low-effort or suspicious accounts.</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            {/* Privacy */}
            <StaggerItem>
              <div className="bg-[hsl(var(--grey-100))]/50 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Privacy</h3>
                <p className="text-white/70 mb-6">
                  Your data belongs to you. We protect it accordingly.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">No third-party data sharing</strong> — We never sell your data to advertisers or data brokers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">End-to-end encryption</strong> — Your messages are encrypted so only you and your match can read them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Location control</strong> — You decide if and when to share your location. It&apos;s opt-in only.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white">Block anyone, instantly</strong> — Block and report with one tap. They&apos;ll never know.</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Commitment Block */}
          <ScrollReveal>
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 text-center backdrop-blur-xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" fill="currentColor" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Our Commitment to You</h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Safety shapes every decision we make at Verity. If something ever feels wrong, our team responds in minutes—not hours. We built Verity to be the dating app where you can finally let your guard down and focus on what matters: finding someone real.
              </p>
            </div>
          </ScrollReveal>

          {/* Report Section */}
          <ScrollReveal className="mt-16">
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Need to Report Something?</h3>
                  <p className="text-muted-foreground mb-4">
                    If you&apos;ve experienced harassment, inappropriate behaviour, or feel unsafe, we want to know immediately. Your report will be reviewed by a real person within minutes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="destructive" asChild>
                      <a href="mailto:safety@verity.au">Email safety@verity.au</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/auth">Report in App</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to date with confidence?</h3>
          <p className="text-muted-foreground mb-8">
            Join thousands of Australians who are tired of the games.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            <Link to="/auth?mode=signup">Get Started</Link>
          </Button>
        </div>
      </section>
    </FadeIn>
  );
};

export default Safety;


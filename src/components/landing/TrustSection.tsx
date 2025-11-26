import { memo } from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle2, Eye, Lock } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export const TrustSection = memo(function TrustSection() {
  return (
    <section id="trust" className="py-24 md:py-32 px-4 bg-[hsl(var(--grey-100))] relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h2 className="section-header text-4xl md:text-5xl mb-6 text-white">
              Your safety is our foundation.
            </h2>
            <p className="body-large text-white/70 max-w-2xl mx-auto">
              We verify every user and protect every interaction—so you can relax and be yourself.
            </p>
          </div>

          {/* Quick trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/80 font-medium">Verified Profiles</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Eye className="w-6 h-6 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/80 font-medium">24/7 Moderation</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Lock className="w-6 h-6 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/80 font-medium">Encrypted Messages</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Shield className="w-6 h-6 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/80 font-medium">Emergency Exit</p>
            </div>
          </div>

          {/* CTA to full safety page */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-full px-8"
            >
              <Link to="/safety">Learn about our safety standards →</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});


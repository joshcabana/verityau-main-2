import { Suspense, lazy, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import critical above-the-fold components immediately
import { HeroSection } from "@/components/landing";
import { AuthCTASection } from "@/components/landing";
import { SectionErrorBoundary } from "@/components/landing/ErrorBoundary";

// Lazy load below-the-fold sections for better performance
const ProblemsSection = lazy(() => import("@/components/landing/ProblemsSection").then(module => ({ default: module.ProblemsSection })));
const HowItWorksSection = lazy(() => import("@/components/landing/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const FeaturesSection = lazy(() => import("@/components/landing/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const TrustSection = lazy(() => import("@/components/landing/TrustSection").then(module => ({ default: module.TrustSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(module => ({ default: module.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection").then(module => ({ default: module.FinalCTASection })));
const Footer = lazy(() => import("@/components/landing/Footer").then(module => ({ default: module.Footer })));

// Loading component for lazy-loaded sections
function SectionLoader() {
  return (
    <div className="py-24 px-4 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-3xl text-center border-none bg-card shadow-elegant">
          <DialogHeader className="space-y-6">
            <DialogTitle className="hero-text text-3xl md:text-6xl mb-4">
              You're in! Lifetime unlimited Verity Dates locked for you.
            </DialogTitle>
            <DialogDescription className="body-large text-muted-foreground leading-relaxed">
              Tell every single friend right now — spots are going fast.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Auth CTA Section - Show when not logged in */}
      {!loading && !user && <AuthCTASection />}

      {/* Lazy-loaded sections below the fold */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <ProblemsSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <HowItWorksSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <FeaturesSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <TrustSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <FAQSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <FinalCTASection />
        </SectionErrorBoundary>
        <SectionErrorBoundary>
          <Footer />
        </SectionErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import confetti from "canvas-confetti";
import { SocialShareButtons } from "./SocialShareButtons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const emailSchema = z.string().email("Please enter a valid email address");

interface WaitlistFormProps {
  variant?: "hero" | "final-cta";
  className?: string;
  showReferralText?: boolean;
}

export const WaitlistForm = ({
  variant = "hero",
  className = "",
  showReferralText = true
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      zIndex: 9999,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          email: email.toLowerCase().trim(),
          city: 'Australia',
          referral_code: null
        }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "You're already on the list",
            description: "We'll be in touch soon.",
          });
        } else {
          throw error;
        }
      } else {
        setShowSuccess(true);
        triggerConfetti();
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHeroVariant = variant === "hero";
  const isFinalCTAVariant = variant === "final-cta";

  return (
    <>
      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className={`max-w-3xl text-center border-none bg-black/95 ${className}`}>
          <DialogHeader className="space-y-6">
            <DialogTitle className="text-3xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Obviously Wide, Satchel, sans-serif' }}>
              You&apos;re in.
            </DialogTitle>
            <DialogDescription className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
              Lifetime unlimited dates are yours. Tell someone worth dating differently.
            </DialogDescription>
            <div className="pt-4">
              <SocialShareButtons variant="success" />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Form */}
      <form onSubmit={handleSubmit} className={`max-w-2xl mx-auto ${className}`}>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="your@email.com →"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className={`flex-1 ${
              isHeroVariant
                ? "h-14 text-lg bg-white/5 border-white/10 text-white shadow-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:border-accent rounded-full px-6 placeholder:text-white/40 transition-smooth"
                : "h-16 md:h-20 text-lg md:text-xl px-8 bg-white text-foreground border-2 border-white rounded-full shadow-elegant focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 transition-smooth placeholder:text-muted-foreground"
            }`}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className={`${
              isHeroVariant
                ? "h-14 px-10 text-lg font-semibold bg-accent hover:bg-accent/90 hover:shadow-gold text-accent-foreground rounded-full whitespace-nowrap transition-smooth"
                : "h-16 md:h-20 px-12 md:px-16 text-base md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:scale-105 shadow-elegant transition-smooth rounded-full"
            }`}
          >
            {isSubmitting ? "Joining..." : isFinalCTAVariant ? "Join the Waitlist" : "Join the Waitlist"}
          </Button>
        </div>

        {showReferralText && (
          <p className={`text-center text-sm mt-3 ${
            isHeroVariant ? "text-white/50" : "text-ink/70"
          }`}>
            Share with a friend—you both get five extra dates at launch.
          </p>
        )}

        {isHeroVariant && <SocialShareButtons />}
      </form>
    </>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";
import { Heart, Video, CheckCircle2, MessageCircle, Twitter, Instagram } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { spring, duration, easing } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import phoneMockupLeft from "@/assets/phone-mockup-left.png";
import phoneMockupRight from "@/assets/phone-mockup-right.png";
import heroIllustration from "@/assets/hero-illustration.png";
import stepIllustration1 from "@/assets/step-illustration-1.png";
import stepIllustration2 from "@/assets/step-illustration-2.png";
import stepIllustration3 from "@/assets/step-illustration-3.png";
import stepIllustration4 from "@/assets/step-illustration-4.png";
import videoDateIllustration from "@/assets/video-date-illustration.png";
import heartVideoIcon from "@/assets/heart-video-icon.png";
import conversationIllustration from "@/assets/conversation-illustration.png";


const SocialShareButtons = ({ variant = "default" }: { variant?: "default" | "success" }) => {
  const shareText = "Finally a dating app that forces a 10-minute video date first. Joining Verity before it blows up";
  const shareUrl = "https://getverity.com.au";
  const { toast } = useToast();

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)} → ${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(`${shareText} → ${shareUrl}`);
    toast({
      title: "Copied to clipboard!",
      description: "Share this on Instagram",
    });
  };

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} → ${shareUrl}`)}`, '_blank');
  };

  const buttonClass = variant === "success" 
    ? "flex items-center gap-2 bg-white/20 border-white/40 text-white hover:bg-white/30 transition-smooth"
    : "flex items-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-accent transition-smooth";

  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleTwitterShare}
        className={buttonClass}
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">Twitter</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleInstagramShare}
        className={buttonClass}
        aria-label="Copy link to share on Instagram"
      >
        <Instagram className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">Instagram</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleWhatsAppShare}
        className={buttonClass}
        aria-label="Share on WhatsApp"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </div>
  );
};

const emailSchema = z.string().email("Please enter a valid email address");

const WaitlistForm = () => {
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
            title: "Already on the list!",
            description: "This email is already registered for the waitlist.",
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

  return (
    <>
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-3xl text-center border-none bg-black/95 backdrop-blur-xl">
          <DialogHeader className="space-y-6">
            <DialogTitle className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Obviously Wide, Satchel, sans-serif' }}>
              You're in! Lifetime unlimited Verity Dates locked for you.
            </DialogTitle>
            <DialogDescription className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
              Tell every single friend right now — spots are going fast.
            </DialogDescription>
            <div className="pt-4">
              <SocialShareButtons variant="success" />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="your@email.com →"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="flex-1 h-14 md:h-16 text-base md:text-lg px-6 bg-white border-2 border-border rounded-full shadow-md focus-visible:ring-primary focus-visible:ring-4 focus-visible:border-primary transition-all placeholder:text-foreground/40"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-14 md:h-16 px-12 md:px-16 text-base md:text-lg font-bold shadow-xl hover:shadow-golden-glow transition-all golden-glow"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist — Lifetime Unlimited"}
            </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-3">
          Share with single friends → you both get +5 extra dates on launch
        </p>
        <SocialShareButtons />
      </form>
    </>
  );
};

const AnimatedCounter = ({ target }: { target: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountAnimation(target, 2000, isVisible);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
};

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { user, loading } = useAuth();

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      zIndex: 9999,
    });
  };

  const handleEmailSubmit = async (email: string) => {
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      return false;
    }

    try {
      const { error } = await supabase.from('waitlist').insert([{ 
        email: email.toLowerCase().trim(),
        city: 'Australia',
        referral_code: null
      }]);
      
      if (error && error.code !== '23505') {
        throw error;
      }
      
      setShowSuccess(true);
      triggerConfetti();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-3xl text-center border-none bg-card shadow-elegant">
          <DialogHeader className="space-y-6">
            <DialogTitle className="hero-text text-3xl md:text-6xl mb-4">
              You're in! Lifetime unlimited Verity Dates locked for you.
            </DialogTitle>
            <DialogDescription className="body-large text-muted-foreground leading-relaxed">
              Tell every single friend right now — spots are going fast.
            </DialogDescription>
            <div className="pt-4">
              <SocialShareButtons variant="success" />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Full-bleed Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-base">
        {/* Gold vignette overlay */}
        <div className="absolute inset-0 hero-gold-vignette" />
        
        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none" />

        {/* Content box */}
        <StaggerContainer className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
          {/* Badge with counter */}
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8">
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm font-medium text-white/80">
                <AnimatedCounter target={18274} /> Australians dating differently
              </span>
            </div>
          </StaggerItem>

          {/* Headline */}
          <StaggerItem>
            <h1 className="hero-text text-7xl md:text-9xl mb-6 text-white">
              Dating,
              <br />
              <motion.span 
                className="bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold))] bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: easing.easeOut }}
              >
                Redefined
              </motion.span>
            </h1>
          </StaggerItem>

          {/* Subtext */}
          <StaggerItem>
            <p className="body-large text-white/70 mb-12 max-w-3xl mx-auto">
              Skip the endless scrolling. Skip the shallow conversations.
              <br />
              <span className="font-semibold text-white">Match → 10-minute video date → unlock messaging.</span>
            </p>
          </StaggerItem>

          {/* CTA */}
          <StaggerItem>
            <div className="flex flex-col items-center gap-4 mb-8">
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                const success = await handleEmailSubmit(email);
                if (success) {
                  e.currentTarget.reset();
                }
              }} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="h-14 text-lg bg-white/5 border-white/10 text-white shadow-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:border-accent rounded-full px-6 placeholder:text-white/40 transition-smooth"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-10 text-lg font-semibold bg-accent hover:bg-accent/90 hover:shadow-gold text-accent-foreground rounded-full whitespace-nowrap transition-smooth"
                >
                  Join the Waitlist
                </Button>
              </form>
              
              {/* Social sharing - smaller, less prominent */}
              <p className="text-sm text-white/50">
                Share with friends → both get +5 extra dates on launch
              </p>
              <div className="flex gap-3">
                <SocialShareButtons />
              </div>
            </div>
          </StaggerItem>

          {/* Launch info */}
          <StaggerItem>
            <p className="text-sm text-white/50">
              Launches January 2026 • First 500 members get lifetime unlimited dates
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Auth CTA Section */}
      {!loading && !user && (
        <section className="py-24 px-4 bg-gradient-to-b from-[hsl(var(--grey-100))] to-black">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="section-header text-4xl md:text-5xl mb-6 text-white">
              Ready to date someone real?
            </h2>
            <p className="body-large text-white/70 mb-8">
              Join the waitlist above, or sign in to get started with Verity when it launches.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="text-lg px-8 bg-accent hover:bg-accent/90 hover:shadow-gold text-accent-foreground transition-smooth rounded-full">
                <Link to="/auth">Sign In / Sign Up</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Problems Section */}
      <section className="py-24 px-4 relative bg-[hsl(var(--grey-100))]">
        {/* Line illustration decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10 hidden lg:block">
          <img src={heartVideoIcon} alt="" className="w-full h-full" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <ScrollReveal>
            <h2 className="section-header text-4xl md:text-[64px] text-center mb-20 text-white">
              Every other app is lying to you.
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
                <div className="text-4xl mb-4">😤</div>
                <p className="body-large text-white">
                  You match, they&apos;re hot in photos... then the video call happens.
                </p>
                <p className="text-accent font-semibold mt-4 text-lg">
                  → Verity: See them on video BEFORE you invest emotions
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="bg-white/5 border border-white/10 rounded-lg p-10 shadow-elegant hover:border-accent/30 hover:shadow-gold transition-smooth h-full"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-4">🙄</div>
                <p className="body-large text-white">
                  Three weeks of "hey how was your day" texts, then they ghost.
                </p>
                <p className="text-accent font-semibold mt-4 text-lg">
                  → Verity: 10-minute date FIRST, chat only if you both felt it
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="bg-white/5 border border-white/10 rounded-lg p-10 shadow-elegant hover:border-accent/30 hover:shadow-gold transition-smooth h-full"
                whileHover={{ scale: 1.02, transition: spring.gentle }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-4">🤦</div>
                <p className="body-large text-white">
                  You drive 40 minutes for a date, zero spark, awkward small talk.
                </p>
                <p className="text-accent font-semibold mt-4 text-lg">
                  → Verity: Find out in 10 minutes from your couch
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Bold Text */}
          <ScrollReveal delay={0.2}>
            <p className="text-center text-2xl md:text-3xl font-bold text-accent leading-relaxed">
              Match → 10-minute video date → both say yes → unlock chat → meet IRL.<br />
              <span className="text-white/60 text-xl font-normal">No pen pals. No "hey" messages that go nowhere. Either you connect or you don&apos;t.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-[hsl(var(--grey-100))] relative">
        {/* Line illustration decorations */}
        <div className="absolute top-20 left-10 w-40 h-40 opacity-15 hidden lg:block">
          <img src={conversationIllustration} alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 opacity-15 hidden lg:block">
          <img src={videoDateIllustration} alt="" className="w-full h-full" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <ScrollReveal>
            <h2 className="section-header text-4xl md:text-[64px] text-center mb-32 text-white">
              One video date changes everything
            </h2>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-32">
            {/* Step 1 */}
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                      transition={spring.gentle}
                    >
                      <Heart className="w-6 h-6 text-accent" fill="currentColor" />
                    </motion.div>
                    <span className="text-6xl md:text-7xl font-black text-accent">1</span>
                  </div>
                  <h3 className="section-header text-3xl md:text-4xl mb-4 text-white">
                    Create Your Profile (No Filters, No BS)
                  </h3>
                  <p className="body-large text-white/70">
                    Upload 2-6 photos + record a 30-second intro video. Everyone&apos;s verified with a selfie video. What you see is what you get.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <motion.img 
                    src={stepIllustration1}
                    alt="Hands almost touching - human connection"
                    className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={spring.gentle}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-1">
                  <motion.img 
                    src={stepIllustration2}
                    alt="Eyes meeting - genuine emotion"
                    className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={spring.gentle}
                  />
                </div>
                <div className="order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                      transition={spring.gentle}
                    >
                      <Video className="w-6 h-6 text-accent" />
                    </motion.div>
                    <span className="text-6xl md:text-7xl font-black text-accent">2</span>
                  </div>
                  <h3 className="section-header text-3xl md:text-4xl mb-4 text-white">
                    10-minute video date — no escape
                  </h3>
                  <p className="body-large text-white/70">
                    Split-screen video call with a timer. See the actual human. No filters. No lies. Just chemistry or not.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                      transition={spring.gentle}
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </motion.div>
                    <span className="text-6xl md:text-7xl font-black text-accent">3</span>
                  </div>
                  <h3 className="section-header text-3xl md:text-4xl mb-4 text-white">
                    Both say &quot;Yes&quot; → unlock chat + meet IRL
                  </h3>
                  <p className="body-large text-white/70">
                    Mutual spark? Start chatting and plan a real date. Actually meet the person, not just text forever.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <motion.img 
                    src={stepIllustration3}
                    alt="Two people in conversation - genuine connection"
                    className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={spring.gentle}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                      transition={spring.gentle}
                    >
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </motion.div>
                    <span className="text-6xl md:text-7xl font-black text-accent">4</span>
                  </div>
                  <h3 className="section-header text-3xl md:text-4xl mb-4 text-white">
                    One or both &quot;No&quot; → done, next
                  </h3>
                  <p className="body-large text-white/70">
                    No awkwardness. No ghosting. No bullshit. Clean exit. Move on to someone who&apos;s actually right for you.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <motion.img 
                    src={stepIllustration4}
                    alt="Intimate moment - human warmth"
                    className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={spring.gentle}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Animated Counter */}
          <ScrollReveal className="mt-24 md:mt-32 text-center">
            <p className="section-header text-3xl md:text-5xl mb-8 text-white">
              <AnimatedCounter target={18274} /> Australians already waiting
            </p>

            {/* Email Form */}
            <WaitlistForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section - Full Bleed Gold */}
      <section className="relative py-24 md:py-40 px-4 bg-accent overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))]" />
        
        <ScrollReveal className="relative max-w-5xl mx-auto text-center">
          {/* Massive Headline */}
          <h2 className="hero-text text-5xl md:text-[80px] text-ink mb-16">
            Be the first in Canberra to date someone real.
          </h2>

          {/* Email Form */}
          <form onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const success = await handleEmailSubmit(email);
            if (success) {
              e.currentTarget.reset();
            }
          }} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="your@email.com →"
                required
                className="flex-1 h-16 md:h-20 text-lg md:text-xl px-8 bg-white text-foreground border-2 border-white rounded-full shadow-elegant focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 transition-smooth placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="h-16 md:h-20 px-12 md:px-16 text-base md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:scale-105 shadow-elegant transition-smooth rounded-full"
              >
                Join Waitlist — Lifetime Unlimited
              </Button>
            </div>
            <p className="text-center text-sm text-ink/70 mt-4">
              Share with single friends → you both get +5 extra dates on launch
            </p>
            <SocialShareButtons />
          </form>

          {/* Small Launch Text */}
          <p className="body-base text-ink/80">
            Launching Australia January 2026 — starting in Canberra because we&apos;re from here and this city deserves better.
          </p>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <span 
                className="hero-text text-3xl md:text-4xl font-bold text-accent"
              >
                Verity
              </span>
            </div>

            {/* Center: Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-primary-foreground/60 text-sm md:text-base">
              <Link to="/privacy" className="gold-underline hover:text-accent transition-smooth">
                Privacy
              </Link>
              <span className="text-primary-foreground/40">·</span>
              <Link to="/terms" className="gold-underline hover:text-accent transition-smooth">
                Terms
              </Link>
              <span className="text-primary-foreground/40">·</span>
              <Link to="/admin" className="gold-underline hover:text-accent transition-smooth">
                Admin
              </Link>
              <span className="text-primary-foreground/40">·</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="gold-underline hover:text-accent transition-smooth">
                Instagram
              </a>
              <span className="text-primary-foreground/40">·</span>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="gold-underline hover:text-accent transition-smooth">
                TikTok
              </a>
              <span className="text-primary-foreground/40">·</span>
              <a href="mailto:hello@verity.au" className="gold-underline hover:text-accent transition-smooth">
                hello@verity.au
              </a>
            </div>

            {/* Right: Copyright */}
            <div className="flex-shrink-0 text-primary-foreground/50 text-sm md:text-base text-center md:text-right">
              Made with frustration and love in Canberra © 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

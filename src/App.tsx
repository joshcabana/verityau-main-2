import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageTransition } from "@/components/motion";
import * as Sentry from "@sentry/react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Onboarding from "./pages/Onboarding";
import Main from "./pages/Main";
import IntroCall from "./pages/IntroCall";
import ExtendedCall from "./pages/ExtendedCall";
import MatchSuccess from "./pages/MatchSuccess";
import Matches from "./pages/Matches";
import MatchProfile from "./pages/MatchProfile";
import WhoLikedYou from "./pages/WhoLikedYou";
import VerityPlus from "./pages/VerityPlus";
import Checkout from "./pages/Checkout";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ProfileEdit from "./pages/ProfileEdit";
import Profile from "./pages/Profile";
import VerityDateWaiting from "./pages/VerityDateWaiting";
import VerityDateCall from "./pages/VerityDateCall";
import VerityDateFeedback from "./pages/VerityDateFeedback";
import AdminVerification from "./pages/AdminVerification";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import VerifyEmail from "./pages/VerifyEmail";

const queryClient = new QueryClient();

// Animated routes wrapper component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/verify-email" element={<ProtectedRoute><PageTransition><VerifyEmail /></PageTransition></ProtectedRoute>} />
        <Route path="/reset-password" element={<PageTransition><ResetPassword /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        
        {/* Protected Routes */}
        <Route path="/onboarding" element={<ProtectedRoute><PageTransition><Onboarding /></PageTransition></ProtectedRoute>} />
        <Route path="/main" element={<ProtectedRoute><PageTransition><Main /></PageTransition></ProtectedRoute>} />
        <Route path="/intro-call" element={<ProtectedRoute><PageTransition><IntroCall /></PageTransition></ProtectedRoute>} />
        <Route path="/extended-call" element={<ProtectedRoute><PageTransition><ExtendedCall /></PageTransition></ProtectedRoute>} />
        <Route path="/match-success" element={<ProtectedRoute><PageTransition><MatchSuccess /></PageTransition></ProtectedRoute>} />
        <Route path="/matches" element={<ProtectedRoute><PageTransition><Matches /></PageTransition></ProtectedRoute>} />
        <Route path="/match/:matchId" element={<ProtectedRoute><PageTransition><MatchProfile /></PageTransition></ProtectedRoute>} />
        <Route path="/chat/:id" element={<ProtectedRoute><PageTransition><Chat /></PageTransition></ProtectedRoute>} />
        <Route path="/who-liked-you" element={<ProtectedRoute><PageTransition><WhoLikedYou /></PageTransition></ProtectedRoute>} />
        <Route path="/upgrade" element={<ProtectedRoute><PageTransition><VerityPlus /></PageTransition></ProtectedRoute>} />
        <Route path="/verity-plus" element={<ProtectedRoute><PageTransition><VerityPlus /></PageTransition></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><PageTransition><Checkout /></PageTransition></ProtectedRoute>} />
        <Route path="/verity-date/waiting" element={<ProtectedRoute><PageTransition><VerityDateWaiting /></PageTransition></ProtectedRoute>} />
        <Route path="/verity-date/call" element={<ProtectedRoute><PageTransition><VerityDateCall /></PageTransition></ProtectedRoute>} />
        <Route path="/verity-date/feedback" element={<ProtectedRoute><PageTransition><VerityDateFeedback /></PageTransition></ProtectedRoute>} />
        <Route path="/profile/edit" element={<ProtectedRoute><PageTransition><ProfileEdit /></PageTransition></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><PageTransition><Profile /></PageTransition></ProtectedRoute>} />
        <Route path="/admin/verification" element={<ProtectedRoute><PageTransition><AdminVerification /></PageTransition></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><PageTransition><Admin /></PageTransition></ProtectedRoute>} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// Fallback component for Sentry error boundary
function SentryFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-4">We encountered an unexpected error.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

const App = () => (
  <Sentry.ErrorBoundary fallback={<SentryFallback />} showDialog>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <AnimatedRoutes />
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Sentry.ErrorBoundary>
);

export default App;

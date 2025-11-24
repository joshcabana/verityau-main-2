import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 md:py-32">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-8 -ml-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-12">Last updated: January 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Verity, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our video-first dating application. This policy complies with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Verity is operated by Verity Australia Pty Ltd, based in Canberra, ACT, Australia. We are committed to protecting your personal information and being transparent about our data practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Profile information:</strong> Name, date of birth, gender, location (city-level only), photos, bio, preferences</li>
              <li><strong>Video content:</strong> Temporary video data during 10-minute "Verity Dates" (not recorded or stored)</li>
              <li><strong>Communications:</strong> Chat messages, reports, and feedback you submit</li>
              <li><strong>Payment information:</strong> Processed securely by Stripe (we never store full card details)</li>
              <li><strong>Device and usage data:</strong> IP address, device type, browser type, activity logs, interaction patterns</li>
              <li><strong>Location data:</strong> City/suburb for matching purposes (we do not track precise GPS coordinates)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We collect this information when you create an account, update your profile, use video dates, send messages, or interact with other users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Match you with compatible users</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Video Content & Safety</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-semibold text-white">
              IMPORTANT: Verity video dates are NOT recorded. All video calls use end-to-end encryption via Daily.co and are automatically deleted after the 10-minute session ends.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may temporarily process video content for safety and moderation purposes only when specifically reported by users, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Reviewing reported content for community guidelines violations</li>
              <li>Detecting inappropriate behavior using AI safety systems (AWS Rekognition for photos only)</li>
              <li>Verifying user authenticity during the verification process</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recording, screenshotting, or sharing video date content without explicit consent is strictly prohibited and may result in immediate account termination and legal action.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Video metadata (call duration, participants, timestamps) is retained for 90 days for safety and quality assurance purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>With other users as part of the matching service</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights and safety of Verity and our users</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your Rights Under Australian Privacy Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under the Australian Privacy Act and Australian Privacy Principles, you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data (data will be deleted within 30 days)</li>
              <li><strong>Data portability:</strong> Request a copy of your data in a portable format (JSON or CSV)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Object:</strong> Object to certain data processing activities</li>
              <li><strong>Complain:</strong> Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@getverity.com.au" className="text-primary hover:underline">
                privacy@getverity.com.au
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Active accounts:</strong> Retained until you delete your account</li>
              <li><strong>Deleted accounts:</strong> Permanently deleted within 30 days (except data required for legal compliance)</li>
              <li><strong>Chat messages:</strong> Deleted when either party deletes their account</li>
              <li><strong>Video call metadata:</strong> Retained for 90 days for safety purposes</li>
              <li><strong>Payment records:</strong> Retained for 7 years as required by Australian tax law</li>
              <li><strong>Safety reports:</strong> Retained for 2 years for investigation and legal purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your data is primarily stored in Australia using Supabase (AWS ap-southeast-2 region). We may transfer data internationally to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Daily.co (USA):</strong> For video call infrastructure (ephemeral data only, not stored)</li>
              <li><strong>Stripe (USA):</strong> For payment processing (industry-standard security)</li>
              <li><strong>AWS Rekognition (USA):</strong> For photo moderation (images deleted after processing)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All international transfers comply with APP 8 and use appropriate safeguards including encryption and contractual protections.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement industry-leading security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>End-to-end encryption for video calls</li>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Encrypted database storage with row-level security</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication for account access</li>
              <li>Rate limiting to prevent abuse and spam</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Verity is not intended for users under 18 years of age. We do not knowingly collect personal information from anyone under 18. If we discover that we have collected information from a person under 18, we will immediately delete that information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or prominent notice in the app. Your continued use after changes constitutes acceptance of the updated policy. The "Last updated" date at the top indicates when changes were made.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@getverity.com.au" className="text-primary hover:underline">
                  privacy@getverity.com.au
                </a>
              </p>
              <p><strong>Postal Address:</strong> Verity Australia Pty Ltd, Canberra, ACT, Australia</p>
              <p className="mt-4">
                If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{" "}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.oaic.gov.au
                </a>
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;

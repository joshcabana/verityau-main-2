import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-12">Last updated: January 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using Verity, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms constitute a legally binding agreement between you and Verity Australia Pty Ltd (ABN pending), a company incorporated in the Australian Capital Territory.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You must be at least 18 years old to use Verity. By using our service, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>You are at least 18 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not prohibited from using the service under applicable law</li>
              <li>You have not been previously banned from Verity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Account Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and truthful information</li>
              <li>Updating your information to keep it current</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Community Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using Verity, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Treat all users with respect and courtesy</li>
              <li>Refrain from harassment, hate speech, or abusive behavior</li>
              <li>Not share explicit or inappropriate content</li>
              <li>Not misrepresent your identity or intentions</li>
              <li>Not use the service for commercial purposes without permission</li>
              <li>Not attempt to circumvent safety features or verification</li>
              <li>Report any violations of these guidelines</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Video Calls & Recording Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-semibold text-white">
              STRICT NO-RECORDING POLICY: Recording, screenshotting, screen-capturing, or otherwise preserving any part of a Verity video date is strictly prohibited.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regarding video calls and content on Verity:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Consent required:</strong> You must not record, screenshot, or share video date content without explicit written consent from the other participant</li>
              <li><strong>10-minute duration:</strong> All Verity Dates are limited to 10 minutes and automatically end</li>
              <li><strong>Not stored:</strong> Video calls are NOT recorded by Verity and are automatically deleted after the session</li>
              <li><strong>Monitoring for safety:</strong> Video content may only be reviewed if specifically reported for community guideline violations</li>
              <li><strong>Immediate suspension:</strong> Inappropriate behavior, harassment, or policy violations will result in immediate account suspension</li>
              <li><strong>Legal consequences:</strong> Recording without consent may violate Australian privacy laws and could result in legal action</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              By using Verity video dates, you acknowledge that consent laws in Australia protect against non-consensual recording and sharing of intimate content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Premium Features & Billing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Verity Plus and other premium features are provided on a subscription basis. By purchasing a subscription:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li><strong>Recurring charges:</strong> You authorize recurring charges to your payment method until you cancel</li>
              <li><strong>Auto-renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date</li>
              <li><strong>Refunds:</strong> Refunds are handled in accordance with Australian Consumer Law. Contact us within 14 days if you experience issues</li>
              <li><strong>Price changes:</strong> We reserve the right to change subscription prices with 30 days' notice</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through account settings or by contacting support</li>
              <li><strong>Feature changes:</strong> Premium features are subject to change; we will notify users of major changes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your rights under the Australian Consumer Law are not affected by these Terms. Our services come with guarantees that cannot be excluded under Australian Consumer Law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Violation of these Terms of Service</li>
              <li>Violation of Community Guidelines</li>
              <li>Fraudulent or illegal activity</li>
              <li>Harassment or abusive behavior</li>
              <li>Any other reason we deem appropriate</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may delete your account at any time through account settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the extent permitted by Australian law, Verity is provided "as is" without warranties of any kind. We do not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Guarantee specific matching results or romantic outcomes</li>
              <li>Verify all user information beyond our verification features (photos, email)</li>
              <li>Conduct criminal background checks on users</li>
              <li>Take responsibility for offline meetings or user conduct outside the platform</li>
              <li>Guarantee uninterrupted, error-free, or secure service</li>
              <li>Guarantee compatibility or success in relationships formed through Verity</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Important:</strong> Always use caution when meeting people from the internet. Inform friends/family of your plans, meet in public places, and trust your instincts. Verity is not liable for interactions between users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the maximum extent permitted by Australian law (excluding liability that cannot be excluded under the Australian Consumer Law):
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Verity's total liability is limited to the amount you paid for Verity Plus in the 12 months before the claim</li>
              <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
              <li>We are not liable for loss of profits, data, goodwill, or other intangible losses</li>
              <li>We are not liable for user conduct, interactions, or offline meetings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy that cannot be lawfully excluded under Australian Consumer Law or other applicable law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Verity Australia Pty Ltd, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: (a) your use of Verity, (b) your violation of these Terms, (c) your violation of any rights of another user, or (d) your conduct in connection with Verity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Governing Law & Disputes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms are governed by the laws of the Australian Capital Territory and the Commonwealth of Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of the Australian Capital Territory.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Before commencing legal proceedings, we encourage you to contact us at{" "}
              <a href="mailto:legal@getverity.com.au" className="text-primary hover:underline">
                legal@getverity.com.au
              </a>
              {" "}to attempt to resolve the dispute informally.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or prominent in-app notice at least 14 days before changes take effect. Your continued use of Verity after changes constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using Verity and delete your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@getverity.com.au" className="text-primary hover:underline">
                  legal@getverity.com.au
                </a>
              </p>
              <p><strong>Support:</strong>{" "}
                <a href="mailto:support@getverity.com.au" className="text-primary hover:underline">
                  support@getverity.com.au
                </a>
              </p>
              <p><strong>Postal Address:</strong> Verity Australia Pty Ltd, Canberra, ACT, Australia</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;

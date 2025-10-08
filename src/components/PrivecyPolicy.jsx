import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <section className="">
      <div className="max-w-4xl mx-5 md:mx-20 py-20 space-y-10">
        {/* Page Header */}
        <header className="text-center space-y-3">
          <h1 data-aos='zoom-in' className="text-4xl font-bold text-pink-600">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Your privacy is important to us. Please read this policy carefully to understand how we handle your information.
          </p>
        </header>

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>[Premium Furniture Collection]</strong>. We respect your
            privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you visit or make a purchase from our website.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal details (name, email, phone number, address)</li>
            <li>Order details (products, payment info, preferences)</li>
            <li>Technical data (IP address, browser type, device info)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process and deliver your orders</li>
            <li>To improve our website and customer experience</li>
            <li>To send offers or updates (only if you agree)</li>
            <li>To respond to your queries or support requests</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Data Protection</h2>
          <p>
            We take appropriate security measures to protect your data from
            unauthorized access, loss, or misuse. Your information is stored
            securely and used only for legitimate business purposes.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You
            can disable cookies in your browser settings if you prefer.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Third-Party Services</h2>
          <p>
            We may use third-party tools (such as payment gateways or analytics).
            These services have their own privacy policies, and we are not
            responsible for their practices.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">7. Data Sharing</h2>
          <p>
            We never sell or rent your personal information. Limited data may be
            shared only with trusted partners to complete transactions or
            deliveries.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You can request to view or update your data</li>
            <li>You can ask us to delete your data where possible</li>
            <li>You can unsubscribe from promotional emails anytime</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2">
            📧 <a href="mailto:mdnoyon63@outlook.com" className="text-pink-500 hover:underline">mdnoyon63@outlook.com</a><br />
            📞<a href="tel:+8801749535688">01749535688</a>
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default PrivacyPolicy;

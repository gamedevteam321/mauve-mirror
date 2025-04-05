import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const PrivacyPolicy = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-8">
                  <strong>Effective Date:</strong> 2nd March 2025
                </p>

                <p className="mb-6">
                  At Mauve Story ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our digital experiences, including our website and Framer components, and how we integrate with third-party services (such as Google Sheets, YouTube, and SociableKit widgets).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Personal Data:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>When you interact with our contact buttons (e.g. "Learn more" via WhatsApp), we may receive information such as your inquiry details. However, we do not require you to submit personal data unless you choose to do so.</li>
                  <li>If you voluntarily contact us or subscribe to our communications, we may collect your name, email address, phone number, or other contact details.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Usage Data:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Our digital experiences automatically collect usage data such as device type, browser type, IP address, operating system, access times, pages viewed, and other diagnostic data.</li>
                  <li>We also receive data from Google Sheets via our Apps Script integration, which may include video URLs and additional text (for example, descriptive information from Column B) that you provided to us.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Data:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>We use third-party services such as YouTube to embed video content and SociableKit to display Google Reviews. These platforms may collect data according to their own privacy policies.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide, operate, and maintain our website and digital experiences.</li>
                  <li>Improve your experience by personalizing content, such as displaying additional descriptive text alongside our "Learn more" call-to-action.</li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Monitor and analyze usage and trends to improve our services.</li>
                  <li>Ensure compliance with legal obligations and protect the rights and safety of our users.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing Your Information</h2>
                <p className="mb-4">We do not sell or share your personal data with third parties for their marketing purposes. We may share your information with:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Service Providers:</strong> Trusted third-party service providers (such as hosting platforms, analytics providers, and widget providers) who perform functions on our behalf.</li>
                  <li><strong>Legal Compliance:</strong> If required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal data may be transferred as part of that transaction.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-6">
                  We may use cookies, web beacons, and other tracking technologies to enhance your experience, monitor site usage, and improve our services. Most browsers automatically accept cookies, but you can set your browser to refuse cookies if you prefer.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Links</h2>
                <p className="mb-6">
                  Our website or digital experiences may include links to third-party sites (such as YouTube, SociableKit, or social media profiles). We are not responsible for the content or privacy practices of these third parties. Please review their respective privacy policies.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
                <p className="mb-6">
                  We implement reasonable security measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
                <p className="mb-6">
                  We retain your personal data only for as long as is necessary for the purposes for which it was collected or as required by applicable law. When we no longer need your information, we will delete or anonymize it.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
                <p className="mb-4">Depending on your jurisdiction, you may have rights regarding your personal data, including the right to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Access the data we hold about you.</li>
                  <li>Request correction or deletion of your personal data.</li>
                  <li>Object to or restrict the processing of your data.</li>
                  <li>Data portability.</li>
                </ul>
                <p className="mb-6">If you wish to exercise any of these rights, please contact us using the information below.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">9. International Transfers</h2>
                <p className="mb-6">
                  Your information may be stored and processed in a country other than your own. By using our services, you consent to the transfer of your data to countries that may not have the same data protection laws as your country.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mb-6">
                  <p><strong>Mauve Story</strong></p>
                  <p>Email: [email protected]</p>
                  <p>Address: Road Number 44, Pitam Pura 1, Shiva Enclave, Near Engineering Enclave, Crossing, Harsh Vihar, Delhi – 110034</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default PrivacyPolicy; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const TermsOfService = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
                Terms & Conditions
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-8">
                  <em>Last updated: 16/02/2025</em>
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Overview</h2>
                <p className="mb-6">
                  Welcome to www.mauvestory.com. These Terms & Conditions ("Terms") govern your use of this website and the information provided therein. By browsing or using this website, you agree to comply with and be bound by these Terms, our Privacy Policy, and any additional policies and notices that may apply.
                </p>
                <p className="mb-6">
                  The Website Owner, including subsidiaries and affiliates of CB Enterprises (collectively "Mauve Story", "we", "us", or "our"), provides the content on this website to you ("you" or "your") subject to these Terms. Our registered office is:
                </p>
                <p className="mb-6 font-medium">
                  B-12/A, Mahendru Enclave, Opp. Gujranwala Town-II, New Delhi – 110052
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of the Website</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-4">
                  <li>
                    <strong>General Information</strong><br />
                    The content on this website is provided for your general information and use only and is subject to change without notice.
                  </li>
                  <li>
                    <strong>No Warranty</strong><br />
                    Neither Mauve Story nor any third parties make any warranty or guarantee regarding the accuracy, timeliness, performance, completeness, or suitability of the information and materials found on this website for any purpose. You acknowledge that such information may contain inaccuracies or errors, and we exclude liability for any such inaccuracies or errors to the maximum extent permitted by law.
                  </li>
                  <li>
                    <strong>Copyright and Trademarks</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>All materials on this website—including design, layout, look, appearance, and graphics—are owned by or licensed to us.</li>
                      <li>Reproduction is prohibited except in accordance with the copyright notice, which forms part of these Terms.</li>
                      <li>All trademarks displayed that are not our property are acknowledged.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Links to Other Websites</strong><br />
                    This website may include links to third-party websites for your convenience. Such links do not imply endorsement by Mauve Story, and we are not responsible for their content.
                  </li>
                  <li>
                    <strong>Linking</strong><br />
                    You may not create a link to this website from another website or document without our prior written consent.
                  </li>
                  <li>
                    <strong>Governing Law</strong><br />
                    Your use of this website and any dispute arising out of such use is subject to the laws of India (or any other applicable regulatory authority).
                  </li>
                  <li>
                    <strong>Unauthorized Use</strong><br />
                    Unauthorized use of this website may give rise to a claim for damages and/or constitute a criminal offense.
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li>The content on this website is owned by or licensed to Mauve Story.</li>
                  <li>Any unauthorized reproduction, distribution, or modification of this content is strictly prohibited unless explicitly allowed by our copyright notice.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimer</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li>The information on this website is provided "as is" without any representations or warranties, express or implied.</li>
                  <li>Mauve Story will not be liable for any damages arising from the use of or inability to use the website.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Information</h2>
                <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
                <div className="mb-6">
                  <p><strong>Phone:</strong> +91 11 45042363 / +91 98111 67891 / +91 99991 07849 / +91 98109 47849</p>
                  <p><strong>Email:</strong> [email protected]</p>
                  <p><strong>WhatsApp:</strong> +91 9810947849</p>
                </div>

                <p className="text-center mt-8">
                  © 2025 Mauve Story. All Rights Reserved.<br />
                  <em>Designed & Developed by Zen Webnet.</em>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default TermsOfService; 
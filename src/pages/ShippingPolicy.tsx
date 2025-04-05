import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const ShippingPolicy = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
                Shipping Policy
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-6">
                  Welcome to <strong>Mauve Story</strong>. We are committed to delivering our quality products to you in a timely and efficient manner. This Shipping Policy outlines our shipping procedures, estimated delivery times, and important information regarding international shipments.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Order Processing</h2>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    <strong>Processing Time:</strong><br />
                    All orders are processed within <strong>1-2 business days</strong> after receiving your order confirmation. Orders placed on weekends or holidays will begin processing the next business day.
                  </li>
                  <li>
                    <strong>Order Confirmation:</strong><br />
                    Once your order is placed, you will receive an email confirmation. This confirmation does not mean that your order has shipped.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Shipping Methods & Delivery</h2>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    <strong>Domestic Shipping:</strong><br />
                    We offer several shipping options for domestic orders. Shipping timeframes are estimated based on the carrier's transit times:
                    <ul className="list-disc pl-6 mt-2">
                      <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                      <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
                      <li><strong>Express Shipping:</strong> 1-2 business days</li>
                    </ul>
                  </li>
                  <li>
                    <strong>International Shipping:</strong><br />
                    For international orders, delivery times vary by destination and customs processing. Generally, international shipments arrive within <strong>7-21 business days</strong>. Please note that delays due to customs or unforeseen circumstances may occur.
                  </li>
                  <li>
                    <strong>Tracking Your Order:</strong><br />
                    Once your order ships, you will receive a shipping confirmation email containing your tracking number and a link to track your package.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Shipping Costs</h2>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    <strong>Domestic Orders:</strong><br />
                    Shipping charges for domestic orders are calculated at checkout based on the weight and dimensions of your order and the selected shipping method.
                  </li>
                  <li>
                    <strong>International Orders:</strong><br />
                    International shipping rates are calculated at checkout. Please be aware that additional customs fees, taxes, or duties may apply upon arrival in your country. These charges are the responsibility of the recipient.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Delivery Issues</h2>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    <strong>Incorrect Address:</strong><br />
                    Please ensure that your shipping address is entered correctly. Mauve Story is not responsible for delays or non-delivery due to incorrect or incomplete addresses.
                  </li>
                  <li>
                    <strong>Lost or Damaged Packages:</strong><br />
                    If your package is lost or damaged during transit, please contact our Customer Service team at [email protected] within 7 days of the estimated delivery date. We will work with the carrier to resolve the issue.
                  </li>
                  <li>
                    <strong>Customs Delays:</strong><br />
                    International shipments may be delayed due to customs inspections. Please allow extra time for customs processing. We are not responsible for delays beyond our control.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Your Order</h2>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    <strong>Order Cancellation:</strong><br />
                    If you wish to cancel your order, please contact us immediately at [email protected] before the order has been shipped. Once shipped, orders cannot be canceled.
                  </li>
                  <li>
                    <strong>Address Changes:</strong><br />
                    If you need to change your shipping address, please contact us as soon as possible. We will make every effort to update your details if your order has not yet been processed for shipping.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                <p className="mb-4">For any questions or concerns regarding your order or our Shipping Policy, please contact us:</p>
                <div className="mb-6">
                  <p><strong>Email:</strong> [email protected]</p>
                  <p><strong>Phone:</strong> +91 11 45042363 | +91 98111 67891</p>
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

export default ShippingPolicy; 
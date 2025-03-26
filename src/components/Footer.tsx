
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import MauveLogo from "./MauveLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-mauve-50/50 to-mauve-100/50 dark:from-mauve-900/30 dark:to-mauve-900/50 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <MauveLogo className="mb-2" />
            </a>
            <p className="text-muted-foreground mb-4">
              Premium fashion boutique offering personalized styling experiences and curated collections.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mauvestory" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/mauvestory" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Our Store</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#appointment" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Personal Styling</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wardrobe Consultation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom Tailoring</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bridal Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Visit Our Store</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Pitam Pura, Delhi, India</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Monday - Saturday: 10am - 8pm</p>
                  <p>Sunday: 11am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">info@mauvestory.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mauve-200/50 dark:border-mauve-700/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Mauve Story. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors mr-4">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

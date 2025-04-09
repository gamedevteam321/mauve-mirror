import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import MauveLogo from "./MauveLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-mauve-50/50 to-mauve-100/50 dark:from-mauve-900/30 dark:to-mauve-900/50 pt-16 pb-8 ">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pl-20 pr-20">
          <div className="md:col-span-1">
            <a href="#/" className="inline-block mb-4">
              <MauveLogo className="mb-2" />
            </a>
            <p className="text-muted-foreground mb-4">
              Premium fashion boutique offering personalized styling experiences and curated collections.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mauvestory" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/mauvestoryav" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Our Store</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#appointment" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Collections</h3>
            <ul className="space-y-2">
              <li><a href="#/collection/lehenga" className="text-muted-foreground hover:text-primary transition-colors">Lehnga</a></li>
              <li><a href="#/collection/gown" className="text-muted-foreground hover:text-primary transition-colors">Gown</a></li>
              <li><a href="#/collection/indo-western" className="text-muted-foreground hover:text-primary transition-colors">Indo Western</a></li>
              <li><a href="#/collection/bridal-lehenga" className="text-muted-foreground hover:text-primary transition-colors">Bridal Lehenga</a></li>
              <li><a href="#/collection" className="text-muted-foreground hover:text-primary transition-colors">All Collection</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mauve-200/50 dark:border-mauve-700/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left text-sm text-muted-foreground">
            <p><a href="https://vorpstech.com/" className="hover:text-primary transition-colors mr-4">Developed by Vorps Tech</a>
              &copy; {new Date().getFullYear()} Mauve Story. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors mr-4">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary transition-colors mr-4">Terms of Service</a>
              <a href="#shipping" className="hover:text-primary transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

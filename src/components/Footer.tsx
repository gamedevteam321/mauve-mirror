
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mauve-50 dark:bg-mauve-900/20 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mauve-700 to-mauve-500">
                Mauve Story
              </span>
            </a>
            <p className="text-muted-foreground mb-4">
              Premium fashion boutique offering personalized styling experiences and curated collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
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
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#appointment" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Personal Styling</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wardrobe Consultation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom Tailoring</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fashion Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@mauvestory.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mauve Story. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

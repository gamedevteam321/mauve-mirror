
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MauveLogo from "./MauveLogo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm" 
        : "py-5 bg-transparent"
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <MauveLogo />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link text-sm font-medium">Home</a>
          <a href="#about" className="nav-link text-sm font-medium">About</a>
          <a href="#reviews" className="nav-link text-sm font-medium">Reviews</a>
          <a href="#appointment" className="nav-link text-sm font-medium">Book Appointment</a>
          <a href="#location" className="nav-link text-sm font-medium">Location</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <a 
            href="#appointment" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Book Now
          </a>
          
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

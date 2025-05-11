import { useEffect, useState } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MauveLogo from "./MauveLogo";
import MobileMenu from "./MobileMenu";

const categories = [
  { title: 'DRAPE SAREE', slug: 'drape-saree' },
  { title: 'INDO WESTREN', slug: 'indo-western' },
  { title: 'SHARARA', slug: 'sharara' },
  { title: 'LEHNAGA', slug: 'lehenga' },
  { title: 'GOWN', slug: 'gown' },
  { title: 'FISHCUT', slug: 'fishcut' },
  { title: 'ANARKALI', slug: 'anarkali' },
  { title: 'BANARSI LEHNGA', slug: 'banarsi-lehenga' },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
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
        ? "py-3 bg-gradient-to-b from-mauve-50/50 to-mauve-100/50 dark:from-mauve-900/30 dark:to-mauve-900/50 shadow-sm backdrop-blur-sm" 
        : "py-5 bg-gradient-to-b from-mauve-50/50 to-mauve-100/50 dark:from-mauve-900/30 dark:to-mauve-900/50 backdrop-blur-sm"
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <MauveLogo />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link text-sm font-medium">Home</a>
          <div className="relative group">
            <button 
              className="nav-link text-sm font-medium flex items-center gap-1"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Collection <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 transition-all duration-200 ${showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`/collection/${category.slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <a href="/#reviews" className="nav-link text-sm font-medium">Reviews</a>
          <a href="/#location" className="nav-link text-sm font-medium">Location</a>
          <a href="/#about" className="nav-link text-sm font-medium">About Us</a>
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
            href="/#appointment" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Book Appointment
          </a>
          
          <div className="md:hidden">
            <MobileMenu categories={categories} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

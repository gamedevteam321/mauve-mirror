import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Sun, Moon } from "lucide-react";

interface MobileMenuProps {
  categories: Array<{
    title: string;
    slug: string;
  }>;
}

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 -m-2 text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-screen animate-slide-down mt-3 p-4 rounded-t-none bg-background/95 backdrop-blur-sm border-t border-primary/10"
      >
        <div className="grid gap-3">
          <DropdownMenuItem asChild>
            <a href="#/" className="nav-link text-sm font-medium">Home</a>
          </DropdownMenuItem>
          
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
                  href={`#collection/${category.slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('reviews');
              if (element) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
                setIsOpen(false);
              }
            }}
            className="nav-link text-sm font-medium"
          >
            Reviews
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('location');
              if (element) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
                setIsOpen(false);
              }
            }}
            className="nav-link text-sm font-medium"
          >
            Location
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
                setIsOpen(false);
              }
            }}
            className="nav-link text-sm font-medium"
          >
            About Us
          </button>
        </div>
        
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
          
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
                setIsOpen(false);
              }
            }}
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Book Appointment
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;

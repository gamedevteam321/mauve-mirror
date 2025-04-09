import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  categories: Array<{
    title: string;
    slug: string;
  }>;
}

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#/" className="text-base py-2 px-3">Home</a>
          </DropdownMenuItem>
          
          {/* Collection Categories */}
          <div className="py-2 px-3">
            <h3 className="text-base font-medium mb-2">Collections</h3>
            <div className="grid gap-2 pl-2">
              {categories.map((category) => (
                <DropdownMenuItem key={category.slug} asChild>
                  <a 
                    href={`#collection/${category.slug}`}
                    className="text-sm py-1 px-2"
                  >
                    {category.title}
                  </a>
                </DropdownMenuItem>
              ))}
            </div>
          </div>

          <DropdownMenuItem asChild>
            <a href="#reviews" className="text-base py-2 px-3">Reviews</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#location" className="text-base py-2 px-3">Location</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#about" className="text-base py-2 px-3">About Us</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#appointment" 
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Book Appointment
            </a>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;

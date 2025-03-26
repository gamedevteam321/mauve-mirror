
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-screen animate-slide-down mt-3 p-4 rounded-t-none bg-background/95 backdrop-blur-sm border-t border-primary/10"
      >
        <div className="grid gap-3">
          <DropdownMenuItem asChild>
            <a href="#home" className="text-base py-2 px-3">Home</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#about" className="text-base py-2 px-3">About</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#reviews" className="text-base py-2 px-3">Reviews</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#appointment" className="text-base py-2 px-3">Book Appointment</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#location" className="text-base py-2 px-3">Location</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#appointment" 
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow"
            >
              Book Now
            </a>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;

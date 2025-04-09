import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SectionNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove any double hashes
      const cleanHash = hash.replace(/#/g, '');
      
      // If it's a section navigation (reviews, location, about, appointment)
      if (['reviews', 'location', 'about', 'appointment'].includes(cleanHash)) {
        // If we're not on the home page, navigate to home first
        if (location.pathname !== '/') {
          navigate('/', { replace: true });
        }
        
        // Function to scroll to section
        const scrollToSection = () => {
          const element = document.getElementById(cleanHash);
          if (element) {
            // Get the navbar height for offset
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
            
            // Calculate the exact position
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            // Scroll to the position
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Remove the hash from URL without triggering a re-render
            window.history.replaceState(null, '', window.location.pathname);
            return true;
          }
          return false;
        };

        // Try to scroll immediately
        if (!scrollToSection()) {
          // If not found, observe DOM changes
          const observer = new MutationObserver(() => {
            if (scrollToSection()) {
              observer.disconnect();
            }
          });

          // Start observing the document body for changes
          observer.observe(document.body, {
            childList: true,
            subtree: true
          });

          // Cleanup observer after 5 seconds
          setTimeout(() => observer.disconnect(), 5000);
        }
      }
      // If it's a collection navigation
      else if (cleanHash.startsWith('collection/')) {
        const collectionSlug = cleanHash.replace('collection/', '');
        navigate(`/collection/${collectionSlug}`);
      }
    }
  }, [location, navigate]);

  return null;
};

export default SectionNavigator; 
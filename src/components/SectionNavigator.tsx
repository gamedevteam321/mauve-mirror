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
        const element = document.getElementById(cleanHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If it's a collection navigation
      else if (cleanHash.startsWith('collection/')) {
        navigate(`/${cleanHash}`);
      }
    }
  }, [location, navigate]);

  return null;
};

export default SectionNavigator; 
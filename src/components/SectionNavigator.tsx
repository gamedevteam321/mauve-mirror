import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SectionNavigator = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default SectionNavigator; 
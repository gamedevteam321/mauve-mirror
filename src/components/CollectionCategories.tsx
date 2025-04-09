import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  title: string;
  slug: string;
  imageUrl: string;
}

const categories: Category[] = [
  { title: 'DRAPE SAREE', slug: 'drape-saree', imageUrl: './images/catagories/drape-saree.png' },
  { title: 'INDO WESTREN', slug: 'indo-western', imageUrl: './images/catagories/indo-western.png' },
  { title: 'SHARARA', slug: 'sharara', imageUrl: './images/catagories/sharara.png' },
  { title: 'LEHNGА', slug: 'lehenga', imageUrl: './images/catagories/lehenga.png' },
  { title: 'GOWN', slug: 'gown', imageUrl: './images/catagories/gown.png' },
  { title: 'BRIDEMAID', slug: 'bridemaid', imageUrl: './images/catagories/bridemaid.png' },
  { title: 'FISHCUT', slug: 'fishcut', imageUrl: './images/catagories/fishcut.png' },
  { title: 'BRIDAL LEHNGА', slug: 'bridal-lehenga', imageUrl: './images/catagories/bridal-lehenga.png' },
  { title: 'CO-CORDS', slug: 'co-cords', imageUrl: './images/catagories/co-cords.png' },
  { title: 'ANARKALI', slug: 'anarkali', imageUrl: './images/catagories/anarkali.png' },
  { title: 'BANARSI LEHNGА', slug: 'banarsi-lehenga', imageUrl: './images/catagories/banarsi-lehenga.png' },
];

const defaultImage = './images/logo.png';

const CollectionCategories = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleImageError = (slug: string) => {
    console.error(`Failed to load image for ${slug}`);
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  const handleImageLoad = (slug: string) => {
    console.log(`Successfully loaded image for ${slug}`);
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, []);

  return (
    <div 
      ref={sliderRef}
      className="flex overflow-x-auto hide-scrollbar gap-4 py-4 px-2 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopDragging}
      style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
    >
      {categories.map((category) => (
        <Link
          key={category.slug}
          to={`/collection/${category.slug}`}
          className="flex-shrink-0 relative w-[150px] h-[250px] rounded-lg overflow-hidden group bg-mauve-100/10"
          onClick={(e) => isDragging && e.preventDefault()}
        >
          <img
            src={imageErrors[category.slug] ? defaultImage : category.imageUrl}
            alt={category.title}
            onError={() => handleImageError(category.slug)}
            onLoad={() => handleImageLoad(category.slug)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-sm font-medium text-center">
              {category.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionCategories; 
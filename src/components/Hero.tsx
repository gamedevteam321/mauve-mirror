
import { useEffect, useState } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Discover Your Style",
      subtitle: "Premium fashion curated just for you",
      bgColor: "from-mauve-700 to-mauve-300",
    },
    {
      title: "Elegance Redefined",
      subtitle: "Explore our exclusive collections",
      bgColor: "from-mauve-800 to-mauve-400",
    },
    {
      title: "Fashion Forward",
      subtitle: "Trends that define the season",
      bgColor: "from-mauve-600 to-mauve-200",
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`h-full w-full bg-gradient-to-r ${slide.bgColor}`} />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              {slide.subtitle}
            </p>
            <a
              href="#appointment"
              className="mt-8 px-6 py-3 bg-white text-mauve-700 font-medium text-lg rounded-md hover:bg-white/90 transition-colors animate-slide-up opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

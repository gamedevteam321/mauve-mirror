
import { useEffect, useRef } from "react";

const Reviews = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Ensure the iframe loads correctly
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        console.log("Google Reviews iframe loaded successfully");
      };
    }
  }, []);
  
  return (
    <section id="reviews" className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-mauve-100 dark:bg-mauve-900/30 text-mauve-700 dark:text-mauve-300 rounded-full text-sm font-medium mb-4">
          Customer Experiences
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover why our clients love Mauve Story and how we've helped them find their perfect style.
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
        <iframe
          ref={iframeRef}
          src="https://widgets.sociablekit.com/google-reviews/iframe/25529381"
          className="w-full h-[600px] border-0"
          title="Google Reviews"
        />
      </div>
    </section>
  );
};

export default Reviews;

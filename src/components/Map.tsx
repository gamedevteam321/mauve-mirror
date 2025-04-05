
import { useEffect, useRef } from "react";

const Map = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Ensure the iframe loads correctly
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        console.log("Google Maps iframe loaded successfully");
      };
    }
  }, []);
  
  return (
    <section id="location" className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-mauve-100 dark:bg-mauve-900/30 text-mauve-700 dark:text-mauve-300 rounded-full text-sm font-medium mb-4">
          Visit Our Store
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Our Physical Location
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience Mauve Story in person at our boutique
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="font-serif text-xl font-semibold mb-2">Mauve Story Pitampura</h3>
            <p className="text-muted-foreground mb-4">
              Visit our flagship store for personalized styling and exclusive collections.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="font-medium mr-2">Address:</span>
                <span>Pitampura, Delhi, India</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">Hours:</span>
                <span>Monday - Saturday: 10am - 8pm<br />Sunday: 11am - 6pm</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <span>+91 98109 47849</span>
              </div>
            </div>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Mauve+Story+Pitam+Pura/@28.69572,77.134634,14z/data=!4m6!3m5!1s0x390d0353a2400e49:0xe3b47c725f0bfe15!8m2!3d28.6957201!4d77.1346339!16s%2Fg%2F1yg4fd539?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full"
          >
            Get Directions
          </a>
        </div>
        
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
          <iframe
            ref={iframeRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9101055873023!2d77.13205651508945!3d28.695720182394225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0353a2400e49%3A0xe3b47c725f0bfe15!2sMauve%20Story%20Pitam%20Pura!5e0!3m2!1sen!2sus!4v1626169380000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            loading="lazy"
            title="Google Maps - Mauve Story Location"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Map;

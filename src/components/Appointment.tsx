import { useEffect, useRef } from "react";

const Appointment = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Ensure the iframe loads correctly
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        console.log("Google Calendar iframe loaded successfully");
      };
    }
  }, []);
  
  return (
    <section id="appointment" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-mauve-100 dark:bg-mauve-900/30 text-mauve-700 dark:text-mauve-300 rounded-full text-sm font-medium mb-4">
          Book Your Visit
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
         Special Appointments
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
        Visit our store for personalise walkthrough & consultation with our style experts
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden rounded-xl shadow-xl bg-white dark:bg-white">
        <iframe
          ref={iframeRef}
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1PEnwmaKbzsoIj4tvDvaNGXQWBRJWAhmk7C14vRNz2K-ZRE4WuxKiXtegA8ArCvMvIVsCmY4Yq?gv=true"
          className="w-full h-[600px] border-0"
          title="Google Calendar Appointment Scheduling"
        />
      </div>
    </section>
  );
};

export default Appointment;

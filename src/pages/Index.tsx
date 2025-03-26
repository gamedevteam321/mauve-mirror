
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Appointment from "@/components/Appointment";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MessageSquare, Truck, Package } from "lucide-react";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <Hero />
        
        <section id="about" className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-mauve-100 dark:bg-mauve-900/30 text-mauve-700 dark:text-mauve-300 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              About Mauve Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating personalized fashion experiences since 2015.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] bg-mauve-200 dark:bg-mauve-800 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">
                Mauve Story began with a simple vision: to create a fashion boutique that celebrates individuality and offers personalized styling experiences.
              </p>
              
              <p>
                Founded in 2015, we've been dedicated to helping our clients discover their unique style through curated collections and expert fashion advice. Our team of passionate stylists works closely with each client to understand their preferences and lifestyle needs.
              </p>
              
              <p>
                We believe that fashion is more than just clothing—it's a form of self-expression that empowers and inspires. At Mauve Story, we're committed to making fashion accessible, enjoyable, and personal for everyone who walks through our doors.
              </p>
              
              <a 
                href="#appointment" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Book an Appointment
              </a>
            </div>
          </div>
          
          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 rounded-xl bg-mauve-50 dark:bg-mauve-900/20 transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 w-24 h-24">
                <img 
                  src="/lovable-uploads/c84b9a64-22e0-4faa-afb0-16311442cc08.png" 
                  alt="Customer Service" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Customer Service</h3>
              <p className="text-muted-foreground">
                Live chat support available to assist you with any questions about our products or services.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-mauve-50 dark:bg-mauve-900/20 transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 w-24 h-24 flex justify-center items-center">
                <img 
                  src="/lovable-uploads/c84b9a64-22e0-4faa-afb0-16311442cc08.png" 
                  alt="Worldwide Shipping" 
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "0 -200px" }} 
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">World Wide Shipping</h3>
              <p className="text-muted-foreground">
                We deliver our exclusive fashion collections to customers globally, ensuring everyone can access our unique styles.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-mauve-50 dark:bg-mauve-900/20 transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 w-24 h-24 flex justify-center items-center">
                <img 
                  src="/lovable-uploads/c84b9a64-22e0-4faa-afb0-16311442cc08.png" 
                  alt="Easy Returns" 
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "0 -400px" }} 
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">
                Hassle-free return policy allows you to shop with confidence, knowing we stand behind the quality of our products.
              </p>
            </div>
          </div>
        </section>
        
        <Reviews />
        <Appointment />
        <Map />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;

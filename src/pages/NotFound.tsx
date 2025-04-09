import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const NotFound = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
            <a 
              href="#/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Return Home
            </a>
          </section>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default NotFound;

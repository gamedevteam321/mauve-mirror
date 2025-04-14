import TrendingVideoList from "./TrendingVideoList";
import CollectionCategories from "./CollectionCategories";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-32 flex items-center justify-center bg-gradient-to-b from-background via-background to-mauve-50/20 dark:from-background dark:via-background dark:to-mauve-900/20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Trending Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Upcoming 2025 <span className="text-primary">#Wedding</span> Trends
          </p>
        </div>
        <TrendingVideoList />
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Collections
          </h2>
          <CollectionCategories />
        </div>
        <div className="text-center mt-12">
          <a 
            href="/collection"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View All Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

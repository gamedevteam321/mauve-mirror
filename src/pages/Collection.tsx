import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  DrapeSareeVideoList,
  IndoWesternVideoList,
  ShararaVideoList,
  LehengaVideoList,
  GownVideoList,
  FishcutVideoList,
  AnarkaliVideoList,
  BanarsiLehengaVideoList,
} from "@/components/category-videos";

const categories = [
  { title: 'DRAPE SAREE', component: DrapeSareeVideoList },
  { title: 'INDO WESTREN', component: IndoWesternVideoList },
  { title: 'SHARARA', component: ShararaVideoList },
  { title: 'LEHNAGA', component: LehengaVideoList },
  { title: 'GOWN', component: GownVideoList },
  { title: 'FISHCUT', component: FishcutVideoList },
  { title: 'ANARKALI', component: AnarkaliVideoList },
  { title: 'BANARSI LEHNGA', component: BanarsiLehengaVideoList },
];

const Collection = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                All Collections
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our complete range of curated fashion collections
              </p>
            </div>

            {/* Collection Grid */}
            <div className="space-y-32">
              {categories.map(({ title, component: VideoList }) => (
                <div key={title} className="relative">
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl font-bold">{title}</h2>
                  </div>
                  <VideoList />
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Collection; 
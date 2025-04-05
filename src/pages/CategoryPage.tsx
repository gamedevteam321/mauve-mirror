import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Appointment from "@/components/Appointment";
import {
  DrapeSareeVideoList,
  IndoWesternVideoList,
  ShararaVideoList,
  LehengaVideoList,
  GownVideoList,
  BridemaidVideoList,
  FishcutVideoList,
  BridalLehengaVideoList,
  CoCordVideoList,
  AnarkaliVideoList,
  BanarsiLehengaVideoList,
} from "@/components/category-videos";

const categories = {
  'drape-saree': 'DRAPE SAREE',
  'indo-western': 'INDO WESTREN',
  'sharara': 'SHARARA',
  'lehenga': 'LEHNGA',
  'gown': 'GOWN',
  'bridemaid': 'BRIDEMAID',
  'fishcut': 'FISHCUT',
  'bridal-lehenga': 'BRIDAL LEHNGA',
  'co-cords': 'CO-CORDS',
  'anarkali': 'ANARKALI',
  'banarsi-lehenga': 'BANARSI LEHNGA',
} as const;

const categoryComponents = {
  'drape-saree': DrapeSareeVideoList,
  'indo-western': IndoWesternVideoList,
  'sharara': ShararaVideoList,
  'lehenga': LehengaVideoList,
  'gown': GownVideoList,
  'bridemaid': BridemaidVideoList,
  'fishcut': FishcutVideoList,
  'bridal-lehenga': BridalLehengaVideoList,
  'co-cords': CoCordVideoList,
  'anarkali': AnarkaliVideoList,
  'banarsi-lehenga': BanarsiLehengaVideoList,
} as const;

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = categories[slug as keyof typeof categories] || 'Category Not Found';
  const VideoComponent = categoryComponents[slug as keyof typeof categoryComponents];

  return (
    <ThemeProvider defaultTheme="light">
      <main className="min-h-screen antialiased">
        <Navbar />
        <div className="pt-20">
          <section className="section-container">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our {title.toLowerCase()} collection
              </p>
            </div>
            
            {/* Category Video List */}
            {VideoComponent ? (
              <div className="mb-20">
                <VideoComponent />
              </div>
            ) : (
              <div className="min-h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Category not found</p>
              </div>
            )}
          </section>

          {/* Appointment Section */}
          {VideoComponent && <Appointment />}
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default CategoryPage; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Properties from "@/components/sections/Properties";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Properties />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

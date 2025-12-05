import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/modern_duplex_house__ed1edb2e.jpg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-20" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center -z-10 mix-blend-overlay grayscale" 
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full border border-primary/20">
            Brokers Inmobiliarios
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-gray-900 mb-6 text-balance">
            Tu próximo hogar, <span className="italic text-primary">inversión</span> o proyecto está acá.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed text-balance">
            Asesoramiento inmobiliario profesional en Córdoba y Sierras Chicas. 
            Experiencia, transparencia y resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              onClick={() => scrollToSection("#properties")}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 h-auto rounded-sm shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px] w-full sm:w-auto"
            >
              Ver Propiedades
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline" 
              size="lg" 
              className="border-primary/20 text-primary hover:bg-primary/5 hover:text-primary text-base px-8 py-6 h-auto rounded-sm transition-all group w-full sm:w-auto"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block relative h-[500px] lg:h-[600px] w-full"
        >
          {/* Main Image */}
          <div className="absolute top-10 right-10 w-4/5 h-4/5 bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
             <img 
               src={heroImage}
               alt="Duplex en Cordoba" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>
          <div className="absolute bottom-10 left-10 w-1/2 h-1/2 bg-white p-2 shadow-xl rounded-sm z-10">
             <div className="w-full h-full overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                  alt="Arquitectura moderna" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          
          {/* Blue Accent Box */}
          <div className="absolute bottom-20 right-0 w-32 h-32 bg-primary/20 backdrop-blur-sm -z-10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

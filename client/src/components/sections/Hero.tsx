import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay for better text contrast */}
        <iframe
          src="https://player.vimeo.com/video/1143889798?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hero Video"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-lg shadow-2xl text-center"
        >
          <div className="inline-block mb-6 px-3 py-1 bg-primary text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm">
            Brokers Inmobiliarios
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] text-white mb-6 text-balance drop-shadow-md">
            Tu próximo hogar, <span className="italic text-blue-200">inversión</span> o proyecto está acá.
          </h1>
          
          <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Asesoramiento inmobiliario profesional en Córdoba. 
            Experiencia, transparencia y resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("#properties")}
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 text-base px-8 py-6 h-auto rounded-sm shadow-lg transition-all hover:translate-y-[-2px] font-semibold"
            >
              Ver Propiedades
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/20 text-base px-8 py-6 h-auto rounded-sm transition-all group backdrop-blur-sm"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

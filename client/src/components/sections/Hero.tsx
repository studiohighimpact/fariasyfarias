import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [useIframeFallback, setUseIframeFallback] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background: prefer local file at /videos/hero.mp4; fallback to Vimeo iframe if it errors */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Slight dark overlay to improve text contrast but keep video visible */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Local video (put a file at client/public/videos/hero.mp4) */}
        {!useIframeFallback && (
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            onError={() => setUseIframeFallback(true)}
            onLoadedData={() => setUseIframeFallback(false)}
            aria-hidden
          />
        )}

        {/* Vimeo iframe fallback */}
        {useIframeFallback && (
          <iframe
            src="https://player.vimeo.com/video/1143889798?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Hero Video"
          />
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full bg-white/70 md:bg-white/60 backdrop-blur-lg border border-white/20 p-6 md:p-12 rounded-sm shadow-2xl text-center"
        >
          <div className="inline-block mb-6 px-3 py-1 bg-primary text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm">
            Brokers Inmobiliarios
          </div>
          
          {/* Text color changed to dark (primary/gray) for readability on white card */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] text-primary mb-6 text-balance">
            Tu próximo hogar, <span className="italic text-secondary">inversión</span> o proyecto está acá.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Asesoramiento inmobiliario profesional en Córdoba. 
            Experiencia, transparencia y resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("#properties")}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 h-auto rounded-sm shadow-lg transition-all hover:translate-y-[-2px] font-semibold"
            >
              Ver Propiedades
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/5 text-base px-8 py-6 h-auto rounded-sm transition-all group"
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

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-primary">
              Sobre Nosotros
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En <span className="font-semibold text-primary">Farias & Farias</span> acompañamos cada decisión inmobiliaria con transparencia, compromiso y una mirada profesional del mercado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro objetivo es ayudarte a encontrar el lugar perfecto para vivir, invertir o hacer crecer tu proyecto. Entendemos que cada operación es única, por eso brindamos un asesoramiento personalizado enfocado en tus necesidades reales.
            </p>
          </motion.div>

          {/* Video Content - Vertical Instagram Story Format */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-black">
              {/* Removed background=1 to allow audio control, but kept other params. 
                  Vimeo iframe embeds usually default to unmuted if not autoplay=1&muted=1. 
                  However, browsers block unmuted autoplay. 
                  To ensure volume is max, user interaction is usually required or we remove the background param.
              */}
              <iframe 
                src="https://player.vimeo.com/video/1143865550?h=04711083ad&title=0&byline=0&portrait=0&badge=0" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180%] h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Presentación Farias & Farias"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

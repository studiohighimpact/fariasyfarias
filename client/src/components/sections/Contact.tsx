import { Button } from "@/components/ui/button";
import { Phone, Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            ¿Listo para dar el próximo paso? <br />
            <span className="text-secondary">Hablemos hoy.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ya sea que busques alquilar, comprar o invertir, estamos acá para asesorarte con la seriedad que tu proyecto merece.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <a 
              href="https://wa.me/5493515303648" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all rounded-sm"
            >
              <Phone className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium mb-1">Llamar a Julián</span>
              <span className="text-sm text-gray-400">351 530 3648</span>
            </a>
            
            <a 
              href="https://wa.me/5493513099491" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all rounded-sm"
            >
              <Phone className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium mb-1">Llamar a Pablo</span>
              <span className="text-sm text-gray-400">351 309 9491</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 h-14 text-base rounded-sm w-full sm:w-auto"
            >
              <a href="https://wa.me/5493515303648" target="_blank" rel="noopener noreferrer">
                Enviar WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 h-14 text-base rounded-sm w-full sm:w-auto group"
            >
              <a href="https://www.instagram.com/fariasyfarias_inmobiliaria/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Seguinos en Instagram
                <ArrowUpRight className="ml-1 h-4 w-4 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

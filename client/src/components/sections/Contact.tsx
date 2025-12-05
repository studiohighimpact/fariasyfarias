import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-lg shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              
              {/* Text Content */}
              <div className="p-10 md:p-16 text-white flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                  Hablemos de tu <br />
                  próximo proyecto
                </h2>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  Estamos listos para asesorarte. Contactanos por WhatsApp o visitanos en nuestra oficina.
                </p>
                
                <div className="space-y-6 mb-10">
                   <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-3 rounded-full">
                       <MapPin className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-lg">Nuestra Oficina</h4>
                       <p className="text-blue-100 text-sm">Laprida 78, Villa Allende<br/>Córdoba, Argentina</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-3 rounded-full">
                       <Phone className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-lg">Teléfonos</h4>
                       <div className="text-blue-100 text-sm space-y-1">
                         <p>Julián: 351 530 3648</p>
                         <p>Pablo: 351 309 9491</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="bg-gray-50 p-10 md:p-16 flex flex-col justify-center">
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5493515303648" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full group"
                  >
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                           <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">WhatsApp Julián</h3>
                          <p className="text-sm text-gray-500">Respuesta rápida</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5493513099491" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full group"
                  >
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                           <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">WhatsApp Pablo</h3>
                          <p className="text-sm text-gray-500">Respuesta rápida</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/fariasyfarias_inmobiliaria/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full group mt-4"
                  >
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                           <Instagram className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Instagram</h3>
                          <p className="text-sm text-gray-500">Seguinos</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

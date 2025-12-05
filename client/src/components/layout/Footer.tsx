import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764947812/553372246_18137888824432283_2474607405858223405_n_iovfh4.jpg"
                alt="Farias & Farias Logo"
                className="h-10 w-auto bg-white p-0.5 rounded-sm"
              />
              <span className="font-serif font-bold text-xl text-white">
                Farias <span className="font-sans font-normal text-lg">&</span> Farias
              </span>
            </div>
            <p className="text-blue-100/80 text-sm max-w-xs leading-relaxed">
              Acompañamos cada decisión inmobiliaria con transparencia, compromiso y una mirada profesional del mercado.
            </p>
            <div className="text-sm font-medium text-white/90 pt-2">
              CPI: 4162 | CPI: 7503
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100/70 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-blue-100/70 hover:text-white transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#properties" className="text-blue-100/70 hover:text-white transition-colors text-sm">Propiedades</a></li>
              <li><a href="#contact" className="text-blue-100/70 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-blue-100/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Laprida 78, Villa Allende,<br/>Córdoba, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <div className="flex flex-col">
                  <span>Julián: 351 530 3648</span>
                  <span>Pablo: 351 309 9491</span>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@fariasyfarias.com" className="hover:text-white transition-colors">
                  info@fariasyfarias.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50">
          <p>&copy; {currentYear} Farias & Farias. Todos los derechos reservados.</p>
          <p>Diseñado para excelencia.</p>
        </div>
      </div>
    </footer>
  );
}

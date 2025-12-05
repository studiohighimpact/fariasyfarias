import { cn } from "@/lib/utils";

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
                Farias & Farias
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Acompañamos cada decisión inmobiliaria con transparencia, compromiso y una mirada profesional del mercado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors text-sm">Propiedades</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Julián Farías: 3515303648</li>
              <li>Pablo Farías: 3513099491</li>
              <li>Córdoba y Sierras Chicas</li>
              <li className="pt-2">
                <a href="mailto:info@fariasyfarias.com" className="hover:text-secondary transition-colors">
                  info@fariasyfarias.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Farias & Farias. Todos los derechos reservados.</p>
          <p>Diseñado para excelencia.</p>
        </div>
      </div>
    </footer>
  );
}

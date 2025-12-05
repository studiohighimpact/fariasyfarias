import { Home, Building, Banknote, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Ventas",
      description: "Gestión integral para la compra y venta de inmuebles residenciales y comerciales."
    },
    {
      icon: Building,
      title: "Alquileres",
      description: "Encontramos el inquilino ideal y administramos contratos con total seguridad."
    },
    {
      icon: Banknote,
      title: "Tasaciones",
      description: "Valuaciones precisas y reales del mercado actual para maximizar tu inversión."
    },
    {
      icon: FileText,
      title: "Administración",
      description: "Nos ocupamos del mantenimiento, cobros y gestión de tus propiedades."
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
          <div className="w-16 h-1 bg-white/30 mx-auto mb-6" />
          <p className="text-blue-100 text-lg">
            Soluciones inmobiliarias integrales diseñadas para tu tranquilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

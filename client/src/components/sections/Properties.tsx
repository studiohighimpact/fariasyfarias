import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Car, Ruler, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

type Property = {
  id: string;
  title: string;
  type: "Alquiler" | "Venta";
  price?: string;
  location: string;
  features: {
    bedrooms?: number;
    bathrooms?: number;
    parking?: boolean;
    area?: string;
    other?: string[];
  };
  description: string[];
  images: string[];
  contacts: { name: string; phone: string }[];
};

const properties: Property[] = [
  {
    id: "prop-1",
    title: "Dúplex en Housing Reina Sofía",
    type: "Alquiler",
    location: "Villa Allende",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: true,
      other: ["Cocina-comedor integrada", "Todos los servicios", "Asador", "Apto Crédito Bancor"]
    },
    description: [
      "¡Alquiler de dúplex en Housing Reina Sofía, Villa Allende!",
      "Excelente oportunidad para vivir en un entorno tranquilo y seguro."
    ],
    images: [
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469133634_18109474144432283_723113790107506353_n_rxzehf.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469197058_18109474153432283_1228949851894969080_n_ppcqci.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948227/469223609_18109474171432283_2485127863772668001_n_lgqjsw.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948227/469221894_18109474189432283_3153418952065752577_n_x2zrno.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469158470_18109474168432283_1136589578601841811_n_rvgkfz.jpg"
    ],
    contacts: [
      { name: "Julián Farías", phone: "3515303648" },
      { name: "Pablo Farías", phone: "3513099491" }
    ]
  },
  {
    id: "prop-2",
    title: "Galpón en Parque Industrial Unquillo",
    type: "Alquiler",
    location: "Parque Industrial Unquillo – Punto 53",
    features: {
      area: "840 m²",
      bathrooms: 1,
      other: ["20m x 42m", "1 oficina", "Seguridad 24hs"]
    },
    description: [
      "¡Alquiler de galpón en Parque Industrial Unquillo!",
      "Espacio ideal para logística o producción con excelente accesibilidad."
    ],
    images: [
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469158253_18109464778432283_8099332184661074234_n_xww8mg.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948227/469317517_18109464787432283_5941424751079910110_n_paztio.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469221811_18109464796432283_3301661146349366591_n_qa000i.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948226/469177168_18109464814432283_330326810759628485_n_ctrkao.jpg",
      "https://res.cloudinary.com/dwspyodrs/image/upload/v1764948227/469377372_18109464805432283_4757630496880933489_n_ekmqso.jpg"
    ],
    contacts: [
      { name: "Julián Farías", phone: "3515303648" },
      { name: "Pablo Farías", phone: "3513099491" }
    ]
  }
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg group bg-white rounded-sm h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Badge className="absolute top-4 left-4 z-10 bg-secondary text-primary-foreground hover:bg-secondary/90 font-medium text-xs px-3 py-1 uppercase tracking-wide rounded-sm">
            {property.type}
          </Badge>
          
          <Carousel className="w-full h-full">
            <CarouselContent>
              {property.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative w-full h-full aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${property.title} - Imagen ${idx + 1}`}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-white/80 hover:bg-white border-0" />
               <CarouselNext className="static translate-y-0 h-8 w-8 bg-white/80 hover:bg-white border-0" />
            </div>
          </Carousel>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-serif text-xl font-semibold text-primary leading-tight">
                {property.title}
              </h3>
            </div>
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <MapPin className="h-4 w-4 mr-1 text-secondary" />
              {property.location}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6 text-sm text-gray-600">
            {property.features.bedrooms && (
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-gray-400" />
                <span>{property.features.bedrooms} Dormitorios</span>
              </div>
            )}
            {property.features.bathrooms && (
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-gray-400" />
                <span>{property.features.bathrooms} Baños</span>
              </div>
            )}
            {property.features.area && (
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-gray-400" />
                <span>{property.features.area}</span>
              </div>
            )}
            {property.features.parking && (
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-gray-400" />
                <span>Cochera</span>
              </div>
            )}
          </div>
          
          {/* Additional Features list */}
          <div className="flex flex-wrap gap-2 mb-6">
            {property.features.other?.slice(0, 3).map((feat, i) => (
              <span key={i} className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-gray-500 border border-gray-100">
                {feat}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
             <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Consultas</p>
             <div className="space-y-2">
               {property.contacts.map((contact, idx) => (
                 <div key={idx} className="flex items-center justify-between text-sm">
                   <span className="text-foreground font-medium">{contact.name}</span>
                   <a 
                     href={`https://wa.me/549${contact.phone}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center text-secondary hover:text-primary transition-colors font-medium"
                   >
                     <Phone className="h-3 w-3 mr-1" />
                     {contact.phone}
                   </a>
                 </div>
               ))}
             </div>
             <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white rounded-sm">
               Ver Detalles
             </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-primary">Propiedades Destacadas</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Explorá nuestra selección exclusiva de propiedades en Córdoba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
}

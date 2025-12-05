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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bed, Bath, Car, Ruler, Phone, MapPin, Maximize2, UtensilsCrossed, Zap, Flame, Maximize, Briefcase, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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

// Helper function to map feature text to appropriate icon
function getFeatureIcon(feature: string) {
  const lowerFeature = feature.toLowerCase();
  
  if (lowerFeature.includes("cocina") || lowerFeature.includes("comedor")) {
    return <UtensilsCrossed className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("servicio") || lowerFeature.includes("agua") || lowerFeature.includes("gas") || lowerFeature.includes("luz")) {
    return <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("asador")) {
    return <Flame className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("m²") || lowerFeature.includes("m x") || lowerFeature.includes("superficie") || lowerFeature.includes("area")) {
    return <Maximize className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("oficina")) {
    return <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("seguridad") || lowerFeature.includes("24")) {
    return <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  if (lowerFeature.includes("credito") || lowerFeature.includes("bancor")) {
    return <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />;
  }
  
  // Default icon
  return <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary shrink-0" />;
}

const properties: Property[] = [
  {
    id: "prop-1",
    title: "Dúplex en Housing Reina Sofía",
    type: "Venta",
    location: "Villa Allende",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: true,
      other: ["Cocina-comedor integrada", "Todos los servicios", "Asador", "Apto Crédito Bancor"]
    },
    description: [
      "¡Dúplex en Housing Reina Sofía, Villa Allende!",
      "Excelente oportunidad para vivir en un entorno tranquilo y seguro.",
      "Cuenta con 3 dormitorios amplios, 2 baños completos, cochera y una moderna cocina-comedor integrada.",
      "Disfruta de un asador propio y todos los servicios conectados. Apto para crédito Bancor."
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
      "¡Alquiler de galpón en Parque Industrial Unquillo – Punto 53!",
      "Espacio ideal para logística o producción con excelente accesibilidad.",
      "Cuenta con 840 m² construidos (20m x 42m), oficina privada, baño y seguridad las 24 horas."
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
      className="h-full"
    >
      <Card className="overflow-hidden border-0 shadow-lg group bg-white rounded-sm h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Badge className="absolute top-4 left-4 z-10 bg-primary text-white hover:bg-primary/90 font-bold text-sm px-4 py-1 uppercase tracking-wide rounded-sm shadow-md">
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
               <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-white/80 hover:bg-white border-0 text-black" />
               <CarouselNext className="static translate-y-0 h-8 w-8 bg-white/80 hover:bg-white border-0 text-black" />
            </div>
          </Carousel>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-serif text-xl font-semibold text-gray-900 leading-tight line-clamp-2 h-[3.5rem]">
                {property.title}
              </h3>
            </div>
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <MapPin className="h-4 w-4 mr-1 text-primary shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6 text-sm text-gray-600">
            {property.features.bedrooms && (
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary shrink-0" />
                <span>{property.features.bedrooms} Dormitorios</span>
              </div>
            )}
            {property.features.bathrooms && (
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-primary shrink-0" />
                <span>{property.features.bathrooms} Baños</span>
              </div>
            )}
            {property.features.area && (
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-primary shrink-0" />
                <span>{property.features.area}</span>
              </div>
            )}
            {property.features.parking && (
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-primary shrink-0" />
                <span>Cochera</span>
              </div>
            )}
          </div>
          
          {/* Additional Features list */}
          <div className="flex flex-col gap-2 mb-6">
            {property.features.other?.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs bg-blue-50 px-3 py-2 rounded-sm text-blue-700 border border-blue-100">
                {getFeatureIcon(feat)}
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
             <Dialog>
               <DialogTrigger asChild>
                 <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm h-10">
                   Ver Detalles
                 </Button>
               </DialogTrigger>
               <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white border-none shadow-2xl rounded-lg flex flex-col">
                 {/* Fixed Header */}
                 <DialogHeader className="p-4 md:p-6 border-b border-gray-100 bg-white shrink-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                         <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary text-white">{property.type}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center"><MapPin className="w-3 h-3 mr-1" /> {property.location}</span>
                         </div>
                         <DialogTitle className="font-serif text-xl md:text-3xl text-left leading-tight">{property.title}</DialogTitle>
                      </div>
                      <div className="flex gap-2 shrink-0">
                         {property.contacts.map((contact, idx) => (
                           <Button key={idx} size="sm" className="bg-green-600 hover:bg-green-700 text-white flex-1 md:flex-auto" asChild>
                              <a href={`https://wa.me/549${contact.phone}`} target="_blank" rel="noopener noreferrer">
                                <Phone className="w-4 h-4 mr-2" />
                                <span className="hidden md:inline">Contactar</span>
                                <span className="md:hidden">WhatsApp</span>
                              </a>
                           </Button>
                         ))}
                      </div>
                    </div>
                 </DialogHeader>
                 
                 {/* Scrollable Content */}
                 <ScrollArea className="flex-1 overflow-y-auto">
                   <div className="p-4 md:p-8 pb-10">
                      <div className="space-y-8">
                        {/* Main Gallery with Carousel */}
                        <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 relative group">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {property.images.map((img, i) => (
                                <CarouselItem key={i}>
                                  <div className="relative w-full aspect-video md:aspect-[16/9]">
                                     <img 
                                       src={img} 
                                       alt={`Foto ${i + 1}`} 
                                       className="w-full h-full object-contain bg-black" 
                                     />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white text-black" />
                            <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white text-black" />
                          </Carousel>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                          <div className="md:col-span-2 space-y-6">
                            <div>
                              <h4 className="font-serif text-xl mb-3 text-primary border-l-4 border-primary pl-3">Descripción</h4>
                              <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                                {property.description.map((p, i) => (
                                  <p key={i}>{p}</p>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 border-t border-gray-100">
                                {property.features.bedrooms && (
                                  <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-blue-50 rounded-lg text-center">
                                    <Bed className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold">Dormitorios</span>
                                    <span className="font-bold text-base md:text-lg">{property.features.bedrooms}</span>
                                  </div>
                                )}
                                {property.features.bathrooms && (
                                  <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-blue-50 rounded-lg text-center">
                                    <Bath className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold">Baños</span>
                                    <span className="font-bold text-base md:text-lg">{property.features.bathrooms}</span>
                                  </div>
                                )}
                                {property.features.area && (
                                  <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-blue-50 rounded-lg text-center">
                                    <Ruler className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold">Superficie</span>
                                    <span className="font-bold text-base md:text-lg">{property.features.area}</span>
                                  </div>
                                )}
                                {property.features.parking && (
                                  <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-blue-50 rounded-lg text-center">
                                    <Car className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold">Cochera</span>
                                    <span className="font-bold text-base md:text-lg">Sí</span>
                                  </div>
                                )}
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3">Características</h4>
                              <ul className="space-y-2 text-sm">
                                {property.features.other?.map((feat, i) => (
                                  <li key={i} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-sm">
                                    {getFeatureIcon(feat)}
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                 </ScrollArea>
               </DialogContent>
             </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-primary">Propiedades Destacadas</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
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

import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Reviews() {
  const reviews = [
    {
      name: "María González",
      text: "Excelente atención de Julián y Pablo. Me ayudaron a encontrar el departamento ideal para mi hijo estudiante. Muy recomendables.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      text: "Profesionalismo y seriedad. Gestionaron la venta de mi casa en tiempo récord y con total transparencia. Gracias por todo.",
      rating: 5
    },
    {
      name: "Laura Fernandez",
      text: "Muy buena experiencia alquilando con ellos. Trato cordial y siempre dispuestos a resolver cualquier duda. 100% confiables.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-primary mb-4">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9 en Google</span>
          </div>
          <a 
            href="https://maps.app.goo.gl/xbiTG8ueFvMLJZji9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm inline-flex items-center"
          >
            <MapPin className="w-3 h-3 mr-1" />
            Ver en Google Maps
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 flex-grow italic">"{review.text}"</p>
                      <p className="font-semibold text-primary text-sm">{review.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-gray-200 text-gray-500 hover:text-primary" />
              <CarouselNext className="-right-12 border-gray-200 text-gray-500 hover:text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

import { Target, Heart, Award, MapPin } from 'lucide-react';

const galleryImages = [
    {
      src: "/gallery/caldas/classroom-1.png",
      alt: "Sala de aula em Caldas",
      category: "Caldas",
    },
    {
      src: "/gallery/caldas/classroom-lesson.png",
      alt: "Aula em Caldas",
      category: "Caldas",
    },
    {
      src: "/gallery/caldas/tutoring-session.jpeg",
      alt: "Sessão de explicações em Caldas",
      category: "Caldas",
    },
    {
      src: "/gallery/sao-joao/placeholder-1.jpg",
      alt: "Estudantes em São João de Ver",
      category: "São João de Ver",
    },
    {
      src: "/gallery/sao-joao/placeholder-2.jpg",
      alt: "Atividades em São João de Ver",
      category: "São João de Ver",
    },
    {
      src: "/gallery/sao-joao/placeholder-3.jpg",
      alt: "Aula em São João de Ver",
      category: "São João de Ver",
    },
    {
      src: "gallery/activities/carnival.jpeg",
      alt: "Carnaval Corujinha",
      category: "Atividades",
    },
    {
      src: "gallery/activities/beach-trip.png",
      alt: "Passeio à praia",
      category: "Atividades",
    },
    {
      src: "/images/gallery/activities/dance-kids.png",
      alt: "Aula de Dance Kids",
      category: "Atividades",
    },
  ]

export default function Galery() {
    return (
        <section id="galeria" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-balance">Nossa Galeria</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Veja momentos especiais das nossas aulas e atividades em Caldas e São João de Ver
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-muted">
                   <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  /> 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{image.category}</p>
                      <p className="text-white/90 text-xs mt-1">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* <div className="text-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/galeria">
                  Ver Galeria Completa
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div> */}
          </div>
        </section>
      )
    }
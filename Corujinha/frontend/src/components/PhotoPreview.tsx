import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const previewImages = [
  {
    src: '/gallery/caldas/classroom-1.png',
    alt: 'Sala de aula - Lobão',
    label: 'Centro Lobão'
  },
  {
    src: '/gallery/caldas/classroom-2.jpg',
    alt: 'Sala de aula 2 - Lobão',
    label: 'Centro Lobão'
  },
  {
    src: '/gallery/caldas/tutoring-session.jpeg',
    alt: 'Aula em Lobão',
    label: 'Centro Lobão'
  },
  {
    src: '/gallery/sao-joao/placeholder-1.jpg',
    alt: 'Centro São João de Ver',
    label: 'São João de Ver'
  },
  // {
  //   src: '/gallery/sao-joao/placeholder-2.jpg',
  //   alt: 'Atividades em São João de Ver',
  //   label: 'São João de Ver'
  // },
  {
    src: '/gallery/activities/carnival.jpeg',
    alt: 'Carnaval Corujinha',
    label: 'Atividades'
  },
  {
    src: '/gallery/activities/classroom-lesson.png',
    alt: 'Driving school',
    label: 'Atividades'
   },
  // {
  //   src: '/gallery/activities/dance-kids.png',
  //   alt: 'Dance Kids',
  //   label: 'Atividades'
  // }
];

export default function PhotoPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-pink-600">Galeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja momentos especiais das nossas aulas e atividades em Lobão e São João de Ver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-pink-100 to-orange-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-orange-200">
                        <div class="text-center p-8">
                          <div class="text-6xl mb-4">🦉</div>
                          <p class="text-gray-700 font-semibold">${image.label}</p>
                          <p class="text-gray-600 text-sm mt-2">${image.alt}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-pink-600">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-semibold text-lg"
          >
            Ver Galeria Completa
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

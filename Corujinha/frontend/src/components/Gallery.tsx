'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  // Caldas
  {
    src: '/gallery/caldas/classroom-1.webp',
    alt: 'Sala de aula - Centro Caldas',
    category: 'lobao',
    title: 'Sala de Aula (Lobão)'
  },
  {
    src: '/gallery/caldas/classroom-2.webp',
    alt: 'Sala de aula 2 - Centro Lobão',
    category: 'lobao',
    title: 'Sala de Aula 2 (Lobão)'
  },
  {
    src: '/gallery/caldas/tutoring-session.webp',
    alt: 'Aula no Centro Lobão',
    category: 'lobao',
    title: 'Aula em Lobão'
  },
  // São João de Ver
  {
    src: '/gallery/sao-joao/placeholder-1.webp',
    alt: 'Centro São João de Ver - 1',
    category: 'sao-joao',
    title: 'São João de Ver 1'
  },
  {
    src: '/gallery/sao-joao/placeholder-2.jpg',
    alt: 'Centro São João de Ver - 2',
    category: 'sao-joao',
    title: 'São João de Ver 2'
  },
  {
    src: '/gallery/sao-joao/placeholder-3.jpg',
    alt: 'Centro São João de Ver - 3',
    category: 'sao-joao',
    title: 'São João de Ver 3'
  },
  // Atividades
  {
    src: '/gallery/activities/beach-trip.png',
    alt: 'Passeio à praia',
    category: 'activities',
    title: 'Passeio à Praia'
  },
  {
    src: '/gallery/activities/carnival.jpeg',
    alt: 'Carnaval Corujinha - Atividade comunitária',
    category: 'activities',
    title: 'Carnaval Corujinha'
  },
  {
    src: '/gallery/activities/classroom-lesson.png',
    alt: 'Escola de Condução',
    category: 'activities',
    title: 'Escola de condução'
  },
  {
    src: '/gallery/activities/dance-kids.png',
    alt: 'Aula de Dance Kids ao ar livre',
    category: 'activities',
    title: 'Dance Kids'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'lobao' | 'sao-joao' | 'activities'>('all');

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Nossa <span className="text-pink-600">Galeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Momentos especiais e atividades na Corujinha
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('lobao')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filter === 'lobao'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              Centro Lobão
            </button>
            <button
              onClick={() => setFilter('sao-joao')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filter === 'sao-joao'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              Centro São João de Ver
            </button>
            <button
              onClick={() => setFilter('activities')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filter === 'activities'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              Atividades
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl bg-white"
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
                          <p class="text-gray-700 font-semibold">${image.title}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-10"
            >
              <X size={40} />
            </button>

            {selectedImage > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 text-white hover:text-pink-400 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 text-white hover:text-pink-400 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>
            )}

            <div className="max-w-6xl w-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {filteredImages[selectedImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


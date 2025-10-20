'use client';

import { Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="Corujinha Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold">Corujinha</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Centro de explicações e apoio educativo dedicado ao desenvolvimento das crianças.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-pink-400 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-pink-400 transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('history')} className="text-gray-400 hover:text-pink-400 transition-colors">
                  História
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-pink-400 transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('training')} className="text-gray-400 hover:text-pink-400 transition-colors">
                  Formações
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Explicações até ao 12º ano e preparação para o exames</li>
              <li>Atividades de Férias</li>
              <li>Transporte Escolar</li>
              <li>Formações Profissionais</li>
              <li>Cursos Certificados</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contactos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-pink-400 shrink-0 mt-1" size={20} />
                <a href="tel:+351916280509" className="text-gray-400 hover:text-pink-400 transition-colors">
                  +351 916 280 509
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-400 shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <p>R. Namorados 566</p>
                  <p>4505-444 Lobão</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-400 shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <p>Av. Dr. Francisco Sá Carneiro 1192 Loja H</p>
                  <p>4520-617 São João de Ver</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              {currentYear} Corujinha. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              Feito com <Heart className="text-pink-400" size={16} fill="currentColor" /> para as nossas crianças
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

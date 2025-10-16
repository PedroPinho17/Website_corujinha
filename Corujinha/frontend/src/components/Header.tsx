import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Corujinha Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-pink-600">Corujinha</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('history')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              História
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Formações
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('history')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left">
              História
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left">
              Formações
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors font-medium text-center">
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

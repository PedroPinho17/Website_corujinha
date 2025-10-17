import { GraduationCap, Heart, Users } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Educação com <span className="text-pink-600">Carinho</span> e <span className="text-orange-600">Dedicação</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Centro de explicações e apoio educativo para crianças até ao 12º ano e preparação para o exames.
              Na Corujinha, cada criança recebe atenção personalizada para alcançar o seu melhor potencial.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={scrollToContact}
                className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Entre em Contacto
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-all font-medium"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform">
              <img src="/logo1.webp" alt="Corujinha" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <Heart className="text-pink-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">+500</p>
                  <p className="text-sm text-gray-600">Crianças Apoiadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Explicações</h3>
            <p className="text-gray-600">
              Apoio escolar personalizado para todas as disciplinas até ao 12º ano e preparação para o exames
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <Heart className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Atividades de Férias</h3>
            <p className="text-gray-600">
              Programas divertidos e educativos durante as férias escolares
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Formações Profissionais</h3>
            <p className="text-gray-600">
              Diferentes Cursos certificados 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Target, Heart, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-pink-600">Corujinha</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um projeto nascido do coração, dedicado ao desenvolvimento e bem-estar das crianças
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Conheça a Fundadora</h3>
                <h4 className="text-2xl text-pink-600 font-semibold mb-2">Vera Branquinho</h4>
                <p className="text-gray-600 mb-6">Fundadora da Corujinha</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vera Branquinho, nascida a 10 de outubro de 1980, sempre teve um sonho:
                  fazer a diferença na vida das pessoas, especialmente das crianças.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Com experiência profissional na Minisom, Vera decidiu dar vida ao seu projeto
                  mais pessoal - criar um espaço onde cada criança pudesse desenvolver o seu
                  potencial através da educação e do carinho.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl transform rotate-3"></div>
                  <img
                    src="/Vera.png"
                    alt="Vera Branquinho - Fundadora da Corujinha"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 mt-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">A Nossa Missão</h4>
              <p className="text-gray-700 leading-relaxed">
                Hoje, somos uma equipa comprometida que opera em duas localizações
                (Lobão/Caldas e São João de Ver), oferecendo não apenas explicações,
                mas também transporte escolar, atividades de férias e formações profissionais.
                Cada criança que passa pela Corujinha recebe atenção personalizada e dedicada.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Os Nossos Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              Na Corujinha, acreditamos que cada criança é única e merece uma educação
              que respeite o seu ritmo e as suas necessidades individuais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="bg-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Missão</h4>
              <p className="text-sm text-gray-600">
                Apoiar o desenvolvimento académico e pessoal de cada criança
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Valores</h4>
              <p className="text-sm text-gray-600">
                Carinho, dedicação e atenção personalizada
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Qualidade</h4>
              <p className="text-sm text-gray-600">
                Profissionais qualificados e métodos comprovados
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2 Centros</h4>
              <p className="text-sm text-gray-600">
                Lobão/Caldas e São João de Ver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

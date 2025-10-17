import { Target, Heart, Award, MapPin, GraduationCap, Users } from 'lucide-react';

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
                <p className="text-sm text-gray-500 mb-6">Nascida a 10 de outubro de 1980, Licenciada e detentora de um Mestrado em Sociologia das Organizações e do Trabalho, 
                  Vera sempre valorizou o estudo das dinâmicas humanas, das relações sociais e do impacto que a educação pode ter no desenvolvimento individual e coletivo. 
                  Complementou a sua formação com uma Pós-Graduação em Gestão de Recursos Humanos, adquirindo competências de liderança, gestão de equipas e desenvolvimento de 
                  pessoas. Paralelamente, investiu em formação especializada na área do TDAH e Hiperatividade, reforçando a sua capacidade para compreender e 
                  apoiar crianças com necessidades educativas específicas, garantindo práticas inclusivas e estratégias de intervenção eficazes</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl transform rotate-3"></div>
                  <img
                    src="/Vera.webp"
                    alt="Vera Branquinho - Fundadora da Corujinha"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-pink-600">Vera Branquinho</strong> sempre teve um sonho: fazer a diferença na vida das pessoas — especialmente das crianças e jovens. Desde cedo ligada à área da educação e formação, acreditou sempre que aprender vai muito além dos livros: é uma forma de transformar vidas, abrir oportunidades e construir futuros com propósito.
              </p>

              <div className="border-l-4 border-pink-400 pl-4 my-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "O que começou como um pequeno sonho tornou-se, com muito trabalho e determinação, um projeto sólido e reconhecido na região."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Formação e Experiência</h3>
            <p className="text-gray-600">Uma trajetória dedicada à educação e desenvolvimento humano</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="bg-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Formação Académica</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Licenciatura e Mestrado em Sociologia das Organizações e do Trabalho</li>
                <li>• Pós-Graduação em Gestão de Recursos Humanos</li>
                <li>• Formação especializada em TDAH e Hiperatividade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Experiência Profissional</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Passou pela Minisom, onde desenvolveu competências de comunicação, empatia e proximidade com as pessoas, encontrando depois a sua verdadeira vocação na educação comunitária.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Vocação</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Criar um espaço onde cada criança se sentisse acolhida, valorizada e capaz de evoluir ao seu ritmo, num ambiente de respeito, afeto e inspiração.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">O Nascimento da Corujinha</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Foi desse propósito que nasceu um <strong>sonho com asas: a Corujinha</strong>, um projeto educativo pensado de coração para a comunidade. Mais do que um centro de estudos, a Corujinha tornou-se um espaço de crescimento, aprendizagem e partilha, onde cada criança é vista como única e cada família encontra apoio, confiança e parceria no percurso escolar dos seus filhos.
              </p>
              <p>
                Inspirada pelos valores da <strong>educação afetiva, inclusão e desenvolvimento integral</strong>, Vera construiu passo a passo um ambiente que vai além dos cadernos e das tarefas escolares. Na Corujinha, aprende-se com alegria, valoriza-se o esforço, respeitam-se os ritmos individuais e cultivam-se competências para a vida: autonomia, autoestima, responsabilidade e espírito de equipa.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">O Que Oferecemos Hoje</h3>
            <p className="text-gray-600">Um centro educativo completo ao serviço da comunidade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center">
              <div className="bg-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Apoio ao Estudo</h4>
              <p className="text-sm text-gray-600">Personalizado e adaptado a cada criança</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Preparação para Exames</h4>
              <p className="text-sm text-gray-600">Estratégias eficazes de estudo</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Atividades Lúdicas</h4>
              <p className="text-sm text-gray-600">Desenvolvimento criativo e social</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center">
              <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2 Centros</h4>
              <p className="text-sm text-gray-600">Lobão e São João de Ver</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-4 text-xl">Serviços Adicionais</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Programas de férias educativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Desenvolvimento de competências socioemocionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Formação para jovens e adultos</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Parcerias com escolas e instituições locais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Projetos comunitários com impacto social</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Transporte escolar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

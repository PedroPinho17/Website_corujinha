import { ExternalLink, MapPin, Phone, Mail, Heart, Stethoscope, Brain, MessageSquare, Sparkles } from 'lucide-react';

export default function Partnership() {
  return (
    <section id="partner" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
            <Heart className="text-pink-600" size={20} />
            <span className="text-pink-600 font-semibold">Parceria Especial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Juntos pelo <span className="text-pink-600">Desenvolvimento</span> das Crianças
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em colaboração com profissionais especializados para um acompanhamento completo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Labirintológico</h3>
                <p className="text-xl mb-8 text-purple-100">Clínica de Acompanhamento Terapêutico</p>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Stethoscope size={24} />
                      Serviços Especializados
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Brain size={18} className="text-purple-200" />
                        <span className="text-sm">Psicologia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles size={18} className="text-purple-200" />
                        <span className="text-sm">Terapia Ocupacional</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={18} className="text-purple-200" />
                        <span className="text-sm">Terapia da Fala</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart size={18} className="text-purple-200" />
                        <span className="text-sm">Integração Sensorial</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-4">Porquê Esta Parceria?</h4>
                    <p className="text-purple-100 leading-relaxed">
                      A Corujinha acredita no desenvolvimento integral das crianças. Esta parceria permite oferecer
                      às famílias acesso a serviços terapêuticos especializados, garantindo um acompanhamento
                      personalizado e multidisciplinar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-xl">Informações de Contacto</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <MapPin className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Morada</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Rua da Raposa Nº 801<br />
                          4405-313 Vila Nova de Gaia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <Phone className="text-pink-600" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Telefone</p>
                        <div className="space-y-1">
                          <a href="tel:+351933298542" className="text-gray-600 hover:text-pink-600 transition-colors text-sm block">
                            +351 933 298 542
                          </a>
                          <a href="tel:+351967632709" className="text-gray-600 hover:text-pink-600 transition-colors text-sm block">
                            +351 967 632 709
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Mail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Email</p>
                        <a
                          href="mailto:clinicalabirintologico2019@gmail.com"
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm break-all"
                        >
                          clinicalabirintologico2019@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href="https://labirintologico.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-semibold w-full justify-center"
                    >
                      Visitar Website
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-pink-600">Atenção:</strong> Os serviços da Labirintológico são prestados de forma independente.
                Para mais informações ou para marcar uma consulta, entre em contacto diretamente com a clínica através dos dados acima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

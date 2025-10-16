import { Sparkles, Building2, TrendingUp } from 'lucide-react';

export default function History() {
  return (
    <section id="history" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Nossa <span className="text-pink-600">História</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada de dedicação e crescimento ao serviço da comunidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-orange-400"></div>

            <div className="space-y-12">
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all inline-block">
                    <div className="flex md:flex-row-reverse items-start gap-4">
                      <div className="bg-pink-100 p-3 rounded-xl shrink-0">
                        <Sparkles className="text-pink-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">O Início</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Vera Branquinho, trabalhadora na Minisom, sonhava em criar algo especial.
                          Movida pela vontade de ajudar pessoas em necessidade, decidiu
                          focar-se nas crianças - afinal, não há nada melhor do que investir
                          no futuro através da educação.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2"></div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pink-600 rounded-full transform -translate-x-1/2 shadow-lg ring-4 ring-pink-200"></div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2"></div>
                <div className="order-2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                        <Building2 className="text-orange-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Primeiro Centro</h3>
                        <p className="text-gray-600 leading-relaxed">
                          O sonho tornou-se realidade com a abertura do primeiro centro
                          da Corujinha em Lobão/Caldas. Um espaço acolhedor onde as
                          crianças encontram apoio educativo de qualidade e um ambiente
                          familiar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-600 rounded-full transform -translate-x-1/2 shadow-lg ring-4 ring-orange-200"></div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all inline-block">
                    <div className="flex md:flex-row-reverse items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                        <TrendingUp className="text-blue-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Expansão e Crescimento</h3>
                        <p className="text-gray-600 leading-relaxed">
                          O sucesso e a confiança da comunidade permitiram a abertura de
                          um segundo centro em São João de Ver. A Corujinha expandiu
                          também os seus serviços, passando a oferecer formações profissionais
                          certificadas em parceria com entidades estatais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2"></div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 shadow-lg ring-4 ring-blue-200"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl inline-block">
              <p className="text-lg text-gray-700 italic max-w-2xl">
                "O que começou como um sonho de ajudar crianças transformou-se numa
                realidade que toca centenas de famílias. Cada criança que passa pela
                Corujinha é uma história de sucesso que nos motiva a continuar."
              </p>
              <p className="text-pink-600 font-bold mt-4">- Vera Branquinho, Fundadora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

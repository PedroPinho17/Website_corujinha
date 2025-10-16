import { Award, Clock, FileCheck, Users } from 'lucide-react';

export default function Training() {
  return (
    <section id="training" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Formações</span> Profissionais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cursos certificados em parceria com entidades estatais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Técnico de Termalismo</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Curso completo de um ano para formação de técnicos especializados
              em terapias termais e tratamentos de bem-estar.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600" size={20} />
                <span className="text-gray-700">Duração: 1 ano</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="text-blue-600" size={20} />
                <span className="text-gray-700">Certificação reconhecida</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-600" size={20} />
                <span className="text-gray-700">Formação prática incluída</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900 font-semibold">
                Financiamento disponível através de entidades estatais parceiras
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Técnico auxiliar de saúde</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Formação especializada em cuidados de saúde aos utentes, preparando
              profissionais para trabalhar em lares e centros de apoio.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="text-green-600" size={20} />
                <span className="text-gray-700">Formação completa</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="text-green-600" size={20} />
                <span className="text-gray-700">Certificação oficial</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-green-600" size={20} />
                <span className="text-gray-700">Prática supervisionada</span>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-900 font-semibold">
                Financiamento disponível através de entidades estatais parceiras
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cursos Modulares de 25 Horas
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Além dos cursos anuais, oferecemos formações modulares de curta duração
                  em diversas áreas profissionais. Estes cursos são ideais para quem
                  pretende adquirir competências específicas de forma rápida e eficaz.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <FileCheck className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Certificação ao completar o módulo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Horários flexíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Formadores especializados</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="font-bold text-gray-900">Parceria com Entidades Estatais</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Todas as formações podem ser financiadas através dos nossos parceiros institucionais
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="font-bold text-gray-900">Apoio na Candidatura</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Ajudamos no processo de candidatura aos financiamentos disponíveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-semibold text-lg"
          >
            Saiba Mais Sobre as Formações
          </button>
        </div>
      </div>
    </section>
  );
}

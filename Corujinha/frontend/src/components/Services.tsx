import { BookOpen, Sun, Bus, Clock, Users, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Os Nossos <span className="text-pink-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para o apoio educativo e bem-estar das crianças
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="bg-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explicações</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Apoio escolar personalizado para crianças até ao 9º ano de escolaridade.
              Todas as disciplinas com professores especializados.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-pink-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Matemática e Ciências</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-pink-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Português e Línguas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-pink-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Apoio aos Trabalhos de Casa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-pink-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Preparação para Testes</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Sun className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Atividades de Férias</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Durante as férias escolares, oferecemos um programa completo de atividades
              lúdicas e educativas para as crianças.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Jogos Educativos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Atividades Criativas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Recreação ao Ar Livre</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Ambiente Seguro e Divertido</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Bus className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transporte Escolar</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Serviço de transporte seguro e confiável para facilitar o dia-a-dia
              das famílias. Recolha das crianças na escola.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Recolha na Escola</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Transporte Seguro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Horários Flexíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Acompanhamento Profissional</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-600 to-orange-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Clock className="mx-auto mb-4" size={48} />
              <h4 className="text-3xl font-bold mb-2">Horário Flexível</h4>
              <p className="text-pink-100">Adaptado às necessidades das famílias</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4" size={48} />
              <h4 className="text-3xl font-bold mb-2">Grupos Pequenos</h4>
              <p className="text-pink-100">Atenção personalizada garantida</p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4" size={48} />
              <h4 className="text-3xl font-bold mb-2">Profissionais Qualificados</h4>
              <p className="text-pink-100">Equipa experiente e dedicada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

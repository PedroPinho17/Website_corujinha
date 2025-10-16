import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-pink-600">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Fale connosco e conheça melhor os nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="bg-pink-600 p-3 rounded-xl shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <a href="tel:+351916280509" className="text-gray-700 hover:text-pink-600 transition-colors">
                      +351 916 280 509
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="bg-orange-600 p-3 rounded-xl shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Morada Principal</h4>
                    <p className="text-gray-700">R. Namorados 566</p>
                    <p className="text-gray-700">4505-444 Lobão</p>
                    <br />
                    <h4 className="font-bold text-gray-900 mb-1">Morada São João de Ver</h4>
                    <p className="text-gray-700">Av. Dr. Francisco Sá Carneiro 1192 Loja H</p>
                    <p className="text-gray-700">4520-617 São João de Ver</p>
                  </div>
                </div>


                <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">Formacao@ninhodacoruja.pt</p>
                    <p className="text-gray-700">Geral@ninhodacoruja.pt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Localizações</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-pink-600" size={20} />
                  <span className="text-gray-700">Centro de Lobão/Caldas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-pink-600" size={20} />
                  <span className="text-gray-700">Centro de São João de Ver</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-600">Entraremos em contacto em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-600 focus:outline-none transition-colors"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-600 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-600 focus:outline-none transition-colors"
                      placeholder="+351 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-600 focus:outline-none transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-orange-600 text-white py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Onde Estamos</h3>
            <p className="text-gray-600">Encontre-nos em Lobão/Caldas e São João de Ver</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6 shadow-xl">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3012.614285186859!2d-8.49057696377977!3d40.96802790587404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd247f83484b6231%3A0x9c3013157ecde0bd!2sR.%20Namorados%20566%2C%204505-444%20Lob%C3%A3o!3m2!1d40.9678744!2d-8.490356199999999!5e0!3m2!1spt-PT!2spt!4v1760630492927!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Corujinha - Lobão/Caldas e São João de Ver"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 p-3 rounded-xl shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Centro Lobão/Caldas</h4>
                    <p className="text-gray-700 text-sm">R. Namorados 566</p>
                    <p className="text-gray-700 text-sm">4505-444 Lobão</p>
                    <a
                      href="https://maps.google.com/?q=R.+Namorados+566+4505-444+Lobão"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 text-sm font-semibold mt-2 inline-block"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 p-3 rounded-xl shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Centro São João de Ver</h4>
                    <p className="text-gray-700 text-sm">Av. Dr. Francisco Sá Carneiro 1192 Loja H</p>
                    <p className="text-gray-700 text-sm">4520-617 São João de Ver</p>
                    <a
                      href="https://maps.google.com/?q=Av.+Dr.+Francisco+S%C3%A1+Carneiro+1192+Loja+H+4520-617+S%C3%A3o+Jo%C3%A3o+de+Ver"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 text-sm font-semibold mt-2 inline-block"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

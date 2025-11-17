import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Retornaremos em breve.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Entre em Contato</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Agende uma consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6 text-slate-900">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-amber-500 p-3 rounded-lg h-fit">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Endereço</h4>
                  <p className="text-slate-600">
                    Av. Engenheiro Luís Carlos Berrini, Nº 1681<br />
                    Conjunto 111 e 112 - Cidade Monções<br />
                    São Paulo - SP, CEP: 04571-011
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-amber-500 p-3 rounded-lg h-fit">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Telefone</h4>
                  <p className="text-slate-600">
                    (11) 92222-8326
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-amber-500 p-3 rounded-lg h-fit">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">E-mail</h4>
                  <p className="text-slate-600">
                    debora.kulczar@dkulczar.adv.br
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-amber-500 p-3 rounded-lg h-fit">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Horário de Atendimento</h4>
                  <p className="text-slate-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-700 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-700 mb-2">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Selecione uma área</option>
                    <option value="familia">Direito de Família</option>
                    <option value="trabalho">Direito do Trabalho</option>
                    <option value="previdenciario">Direito Previdenciário</option>
                    <option value="consumidor">Direito do Consumidor</option>
                    <option value="civil">Direito Cível</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

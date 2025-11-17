import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzYyODYzMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Reunião de equipe"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl mb-6 text-slate-900">
              Quem Somos
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Débora Kulczar Advocacia - atuamos com dedicação e estratégia para oferecer soluções jurídicas personalizadas. 
              Nosso compromisso é garantir segurança e resultados para nossos clientes.
            </p>
            <h3 className="text-2xl mb-4 text-slate-900">Sobre</h3>
            <p className="text-lg text-slate-600">
              Débora Kulczar Advocacia nasceu com o propósito de oferecer soluções jurídicas de excelência, sempre pautadas pela ética, 
              transparência e compromisso com resultados. Nossa equipe multidisciplinar atua em diversas áreas do Direito, 
              desenvolvendo estratégias personalizadas para atender às necessidades específicas de cada cliente — seja pessoa física ou jurídica. 
              Mais do que assessoria, entregamos confiança, segurança e inovação na condução de cada caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

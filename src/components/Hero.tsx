import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import logoBackground from 'figma:asset/81f46dca6303cfa0a6be201d7a2cd9613370484a.png';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1758310999515-645097b709db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTA0MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70"></div>
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img src={logoBackground} alt="" className="w-full max-w-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl mb-6">
            Excelência em Advocacia e Consultoria Jurídica
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Atuação em Direito de Família - Direito do Trabalho - Direito Previdenciário - Direito do Consumidor - Direito Cível - defendendo seus direitos com ética, competência e compromisso. 
            Soluções jurídicas personalizadas para pessoas físicas e empresas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contato" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#areas" 
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg transition-all"
            >
              Nossas Áreas de Atuação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

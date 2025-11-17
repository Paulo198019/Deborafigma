import profileImage from 'figma:asset/7c77c75b5175114dd8f28c436f139dddd0f62f2b.png';
import { Linkedin, Instagram } from 'lucide-react';

export function Team() {
  return (
    <section id="equipe" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Advogada Responsável</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Profissional qualificada e comprometida com o seu sucesso
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-w-sm w-full">
            <div className="aspect-[3/4] overflow-hidden bg-slate-200">
              <img 
                src={profileImage}
                alt="Dra. Débora Kulczar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2 text-slate-900">Dra. Débora Kulczar</h3>
              <p className="text-sm text-amber-600 mb-2">Advogada - OAB 479600-SP</p>
              <p className="text-slate-600 mb-4">Direito de Família, Trabalho, Previdenciário, Consumidor e Cível</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/d%C3%A9bora-kulczar-861176b7/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-amber-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/dkulczar.adv?igsh=MTV1MmxjM2c4Z3RlOA==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

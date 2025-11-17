import { Phone, Mail } from 'lucide-react';
import logo from 'figma:asset/81f46dca6303cfa0a6be201d7a2cd9613370484a.png';

export function Header() {
  return (
    <header className="bg-slate-900 text-white">
      {/* Top Bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="tel:+5511922228326" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(11) 92222-8326</span>
              </a>
              <a href="mailto:debora.kulczar@dkulczar.adv.br" className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>debora.kulczar@dkulczar.adv.br</span>
              </a>
            </div>
            <div className="text-sm">
              Seg - Sex: 9h às 18h
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Débora Kulczar Advocacia" className="h-20 w-auto" />
            </div>
            
            <ul className="flex flex-wrap gap-6">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a></li>
              <li><a href="#areas" className="hover:text-amber-400 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#equipe" className="hover:text-amber-400 transition-colors">Equipe</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

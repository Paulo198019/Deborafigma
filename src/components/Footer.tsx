import { Instagram, Linkedin } from 'lucide-react';
import logo from 'figma:asset/81f46dca6303cfa0a6be201d7a2cd9613370484a.png';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Débora Kulczar Advocacia" className="h-20 w-auto" />
          </div>
          <p className="text-slate-400 text-sm mb-2">OAB 479600-SP</p>
          <p className="text-slate-400 text-sm">
            Oferecendo soluções jurídicas com excelência e compromisso.
          </p>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Débora Kulczar Advocacia. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/d%C3%A9bora-kulczar-861176b7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dkulczar.adv?igsh=MTV1MmxjM2c4Z3RlOA==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

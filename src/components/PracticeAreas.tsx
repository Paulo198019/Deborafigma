import { 
  Building2, 
  Users, 
  Home, 
  Briefcase, 
  FileText, 
  Shield,
  Heart,
  Landmark
} from 'lucide-react';

export function PracticeAreas() {
  const areas = [
    {
      icon: Heart,
      title: 'Direito de Família',
      description: 'Divórcio, pensão alimentícia, guarda de filhos e partilha de bens.'
    },
    {
      icon: Briefcase,
      title: 'Direito do Trabalho',
      description: 'Defesa de empregados e empregadores em ações trabalhistas e consultoria preventiva.'
    },
    {
      icon: FileText,
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, benefícios por incapacidade e revisões de benefícios do INSS.'
    },
    {
      icon: Shield,
      title: 'Direito do Consumidor',
      description: 'Defesa dos direitos do consumidor contra práticas abusivas e vícios de produtos.'
    },
    {
      icon: Users,
      title: 'Direito Cível',
      description: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.'
    },
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Áreas de Atuação</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Oferecemos soluções jurídicas especializadas em diversas áreas do Direito
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className="p-6 border border-slate-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <Icon className="w-12 h-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-3 text-slate-900">{area.title}</h3>
                <p className="text-slate-600">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

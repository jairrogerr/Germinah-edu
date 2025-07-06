
import { Button } from '@/components/ui/button';
import { Github, BookOpen, ExternalLink, Download } from 'lucide-react';

const GettingStartedSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Acesse o repositório no GitHub',
      description: 'Clone ou baixe o código completo do projeto com toda a documentação.',
      action: 'Ir para GitHub',
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/germinah-edu'
    },
    {
      number: '2', 
      title: 'Leia a documentação',
      description: 'Siga nosso guia passo a passo para entender como montar e configurar o sistema.',
      action: 'Ver Documentação',
      icon: <BookOpen className="w-6 h-6" />,
      link: '#documentacao'
    },
    {
      number: '3',
      title: 'Monte seu sistema físico',
      description: 'Use nossa lista de materiais e tutorial para montar o hardware com Arduino e sensores.',
      action: 'Lista de Materiais',
      icon: <Download className="w-6 h-6" />,
      link: '#materiais'
    },
    {
      number: '4',
      title: 'Use o app gratuito',
      description: 'Acesse nossa plataforma web para controlar e monitorar seu sistema de irrigação.',
      action: 'Abrir Sistema',
      icon: <ExternalLink className="w-6 h-6" />,
      link: '#sistema'
    }
  ];

  return (
    <section id="como-comecar" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como <span className="text-green-600">começar</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Em poucos passos simples, você terá seu próprio sistema de irrigação 
              inteligente funcionando e ensinando sustentabilidade.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                
                <div className="text-green-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-200 text-green-700 hover:bg-green-50 w-full"
                  asChild
                >
                  <a href={step.link} target="_blank" rel="noopener noreferrer">
                    {step.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar? 🚀
            </h3>
            <p className="text-lg mb-8 text-green-100">
              Escolha a opção que melhor se adapta ao seu perfil e comece sua jornada
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium flex-1"
                asChild
              >
                <a href="https://github.com/germinah-edu" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Clonar Repositório
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium flex-1"
                asChild
              >
                <a href="#documentacao" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Acessar Documentação
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium flex-1"
                asChild
              >
                <a href="#sistema" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Abrir Sistema Web
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;

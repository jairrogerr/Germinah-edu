
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Sensor de Umidade',
      description: 'Mede a umidade do solo em tempo real',
      icon: '🌡️'
    },
    {
      number: '02',
      title: 'Arduino',
      description: 'Processa os dados e toma decisões automatizadas',
      icon: '🔧'
    },
    {
      number: '03',
      title: 'Bomba d\'água',
      description: 'Ativa automaticamente quando necessário',
      icon: '💧'
    },
    {
      number: '04',
      title: 'Firebase',
      description: 'Armazena dados na nuvem para análise',
      icon: '☁️'
    },
    {
      number: '05',
      title: 'App Web',
      description: 'Interface para monitoramento e controle',
      icon: '📱'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como <span className="text-green-600">Funciona</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Um sistema completo de irrigação automatizada que conecta hardware e software 
              para ensinar tecnologia de forma prática e sustentável.
            </p>
          </div>

          {/* Process Flow */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Diagram */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Fluxo do Sistema</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                  🌡️ Sensor
                </span>
                <span className="text-green-400">→</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  🔧 Arduino
                </span>
                <span className="text-green-400">→</span>
                <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-lg font-medium">
                  💧 Bomba
                </span>
                <span className="text-green-400">→</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">
                  ☁️ Firebase
                </span>
                <span className="text-green-400">→</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">
                  📱 App Web
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
              asChild
            >
              <a href="https://github.com/germinah-edu" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Ver código no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

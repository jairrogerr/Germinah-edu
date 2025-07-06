
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, BookOpen, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                <span>🌱</span>
                <span>Open Source • Educacional • Sustentável</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-green-600">Tecnologia acessível</span> para um futuro sustentável
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ajude seus alunos a aprender <strong>robótica</strong>, <strong>programação</strong> e <strong>sustentabilidade</strong> com um sistema de irrigação real, automatizado e open source.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('o-que-e')}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Explorar o Projeto</span>
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-200 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl"
                    asChild
                  >
                    <a href="https://github.com/germinah-edu" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-200 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl"
                    asChild
                  >
                    <a href="#documentacao" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Docs
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">🌱</div>
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-4xl">💧</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce" style={{ animationDelay: '1s' }}>
                  ☀️
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center text-3xl animate-pulse" style={{ animationDelay: '1.5s' }}>
                  💧
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

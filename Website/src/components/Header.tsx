
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800 font-nunito">Germinah Edu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('impacto')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Impacto
            </button>
            <a
              href="https://github.com/germinah-edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Repositório
            </a>
            <a
              href="#documentacao"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Documentação
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => goToPage('/dashboard')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('impacto')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Impacto
              </button>
              <a
                href="https://github.com/germinah-edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Repositório
              </a>
              <a
                href="#documentacao"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Documentação
              </a>
              <Button
                onClick={() => goToPage('/dashboard')}
                className="bg-green-600 hover:bg-green-700 text-white w-full mt-4"
              >
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

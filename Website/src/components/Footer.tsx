
import { Leaf, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Impacto Social', href: '#impacto' },
    { name: 'Como Começar', href: '#como-comecar' }
  ];

  const resources = [
    { name: 'GitHub', href: 'https://github.com/germinah-edu' },
    { name: 'Documentação', href: '#documentacao' },
    { name: 'Lista de Materiais', href: '#materiais' },
    { name: 'Tutoriais', href: '#tutoriais' }
  ];

  const legal = [
    { name: 'Termos de Uso', href: '#termos' },
    { name: 'Política de Privacidade', href: '#privacidade' },
    { name: 'Licença MIT', href: 'https://opensource.org/licenses/MIT' },
    { name: 'Código de Conduta', href: '#codigo-conduta' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-nunito">Germinah Edu</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Democratizando o acesso à tecnologia sustentável através da educação. 
              Open source, gratuito e transformador.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/germinah-edu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@germinah.edu"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© 2024 Germinah Edu. Licença MIT.</span>
            </div>
            
            <div className="flex items-center text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 fill-current" />
              <span>para um futuro mais sustentável</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-green-400 font-medium text-lg">
              🌱 Germinah Edu – Plantando o futuro com inovação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

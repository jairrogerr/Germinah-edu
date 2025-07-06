
const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: '🏫',
      title: 'Escolas Públicas e Técnicas',
      description: 'Integre STEM e sustentabilidade no currículo com projetos práticos e envolventes.',
      benefits: ['Material didático completo', 'Projetos interdisciplinares', 'Baixo custo de implementação']
    },
    {
      icon: '🤝',
      title: 'ONGs de Educação',
      description: 'Capacite comunidades com tecnologia acessível e ensino de práticas sustentáveis.',
      benefits: ['Impacto social mensurável', 'Fácil replicação', 'Documentação em português']
    },
    {
      icon: '👨‍🏫',
      title: 'Professores de Robótica',
      description: 'Tenha um projeto completo para ensinar programação, eletrônica e IoT de forma prática.',
      benefits: ['Código open source', 'Tutoriais passo a passo', 'Comunidade ativa']
    },
    {
      icon: '🎓',
      title: 'Estudantes do Ensino Médio',
      description: 'Desenvolva habilidades técnicas enquanto contribui para soluções ambientais reais.',
      benefits: ['Portfólio diferenciado', 'Experiência real', 'Preparo para o mercado']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Para <span className="text-green-600">quem é</span> o Germinah Edu?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nossa plataforma foi pensada para diferentes perfis educacionais, 
              todos unidos pelo objetivo comum de transformação através da tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{audience.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {audience.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-600">Benefícios:</h4>
                      <ul className="space-y-2">
                        {audience.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Faça parte da transformação educacional! 🚀
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Independente do seu perfil, o Germinah Edu tem os recursos 
                necessários para implementar tecnologia sustentável na sua comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                  Ver Exemplos de Projetos
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-xl font-medium transition-colors">
                  Falar com Nossa Equipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

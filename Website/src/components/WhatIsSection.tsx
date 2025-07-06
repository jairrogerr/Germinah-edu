
const WhatIsSection = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Sustentável',
      description: 'Ensina práticas eco-friendly e uso consciente da água'
    },
    {
      icon: '🤖',
      title: 'Tecnológico',
      description: 'Arduino, sensores IoT e programação real'
    },
    {
      icon: '🧠',
      title: 'Educacional',
      description: 'Aprendizado prático de STEM e sustentabilidade'
    },
    {
      icon: '📦',
      title: 'Gratuito e replicável',
      description: 'Open source e documentação completa'
    }
  ];

  return (
    <section id="o-que-e" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que é o <span className="text-green-600">Germinah Edu</span>?
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
            <p className="text-xl text-gray-800 leading-relaxed">
              O <strong>Germinah Edu</strong> é a versão educacional open source do projeto Germinah. 
              Com ele, qualquer escola ou estudante pode montar seu próprio sistema de irrigação 
              com <strong>Arduino</strong>, <strong>sensores de umidade</strong> e um <strong>app web</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;

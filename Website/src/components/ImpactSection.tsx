
const ImpactSection = () => {
  const stats = [
    {
      number: '+33 milhões',
      label: 'brasileiros vivem com insegurança alimentar',
      source: '(IBGE 2022)'
    },
    {
      number: '50%',
      label: 'da água na agricultura é desperdiçada',
      source: '(FAO)'
    },
    {
      number: '100%',
      label: 'open source e gratuito para escolas',
      source: '(Germinah Edu)'
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso <span className="text-green-200">Impacto Social</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Transformamos a educação através da tecnologia sustentável, 
              capacitando jovens para enfrentar os desafios ambientais do futuro.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-200 mb-3">
                  {stat.number}
                </div>
                <p className="text-lg font-medium mb-2">{stat.label}</p>
                <p className="text-sm text-green-200">{stat.source}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-200">
                  Por que fazemos isso?
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Acreditamos que a <strong>educação tecnológica</strong> combinada com 
                  <strong> consciência ambiental</strong> pode transformar comunidades inteiras.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  O Germinah Edu não é apenas sobre plantar sementes na terra - 
                  é sobre <strong>plantar ideias</strong> nas mentes dos jovens que 
                  construirão um futuro mais sustentável.
                </p>
                <p className="text-lg leading-relaxed">
                  Cada projeto implementado é uma <strong>semente de mudança</strong> que 
                  pode crescer e impactar gerações futuras.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-6">🌍</div>
                <div className="bg-white/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-green-200">
                    Nosso Compromisso
                  </h4>
                  <p className="text-lg">
                    Democratizar o acesso à tecnologia sustentável 
                    e formar uma nova geração de cidadãos conscientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

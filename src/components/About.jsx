import './About.css';

const DIFFERENTIALS = [
  {
    title: 'Tecnologia de ponta',
    description: 'Equipamentos modernos e atualizados para diagnósticos precisos e serviços de alta qualidade.',
    icon: 'tech',
  },
  {
    title: 'Profissionais qualificados',
    description: 'Equipe técnica certificada e em constante capacitação para atender com excelência.',
    icon: 'team',
  },
  {
    title: 'Atendimento personalizado',
    description: 'Cuidamos do seu veículo como se fosse o nosso, com transparência, agilidade e respeito.',
    icon: 'care',
  },
];

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="about__eyebrow">Sobre / Diferenciais</p>
          <h2 className="about__title">
            Tecnologia, cuidado e atendimento que fazem a diferença
          </h2>
          <p className="about__desc">
            Na Car-X Auto Center, cada veículo recebe atenção especializada,
            com equipamentos modernos e uma equipe preparada para oferecer o
            melhor serviço. Nosso compromisso é com a sua segurança, a
            performance do seu carro e a sua satisfação.
          </p>
        </div>

        <div className="about__list">
          {DIFFERENTIALS.map((d) => (
            <div key={d.title} className="about__item">
              <div className="about__item-icon">
                <DifferentialIcon name={d.icon} />
              </div>
              <div>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true };
  switch (name) {
    case 'tech':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="1.6" />
          <path d="M9 9h6v6H9z" stroke="#fff" strokeWidth="1.6" />
        </svg>
      );
    case 'team':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" stroke="#fff" strokeWidth="1.6" />
          <path d="M5 20c1-3.5 4-5 7-5s6 1.5 7 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'care':
    default:
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-9.5C5 7.5 7 5.5 9.5 5.5c1.2 0 2.4.6 2.5 1.8.1-1.2 1.3-1.8 2.5-1.8C17 5.5 19 7.5 19 10.5 19 15.6 12 20 12 20Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

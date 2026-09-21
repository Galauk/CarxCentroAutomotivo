import './Services.css';

const SERVICES = [
  {
    title: 'Diagnóstico / OBD',
    description:
      'Leitura e interpretação de falhas com equipamentos de última geração para identificar o problema com precisão.',
    icon: 'diagnostico',
  },
  {
    title: 'Programação',
    description:
      'Programação de módulos, ECU, imobilizador, chave presencial e muito mais. Atualizações e parametrizações sob medida.',
    icon: 'programacao',
  },
  {
    title: 'Freios',
    description:
      'Revisão e manutenção completa do sistema de freios. Segurança e desempenho para suas frenagens.',
    icon: 'freios',
  },
  {
    title: 'Airbag',
    description:
      'Diagnóstico e reparo dos sistemas de airbag e segurança. Seu veículo sempre protegido.',
    icon: 'airbag',
  },
  {
    title: 'Suspensão',
    description:
      'Reparos e alinhamento de suspensão para mais estabilidade, conforto e dirigibilidade.',
    icon: 'suspensao',
  },
  {
    title: 'Pneus',
    description:
      'Venda, balanceamento, alinhamento e cuidados para maior durabilidade e segurança nas estradas.',
    icon: 'pneus',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <p className="services__eyebrow">Nossos serviços</p>
        <h2 className="services__title">O que fazemos pelo seu veículo</h2>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon">
                <ServiceIcon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#contato" className="service-card__link">
                Saiba mais
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="services__banner">
          <ShieldIcon />
          <span>Trabalho técnico, peças de qualidade e compromisso com a sua segurança.</span>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5v-6L12 2Z" stroke="var(--red-accent)" strokeWidth="1.6" />
      <path d="M9 12l2 2 4-4" stroke="var(--red-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ name }) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true };
  switch (name) {
    case 'diagnostico':
      return (
        <svg {...common}>
          <path d="M4 12h4l2-6 4 12 2-6h4" stroke="var(--red-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'programacao':
      return (
        <svg {...common}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="var(--red-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'freios':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="var(--red-accent)" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.5" fill="var(--red-accent)" />
        </svg>
      );
    case 'airbag':
      return (
        <svg {...common}>
          <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z" stroke="var(--red-accent)" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'suspensao':
      return (
        <svg {...common}>
          <path d="M7 3v6M7 17v4M17 3v4M17 15v6M4 9h6M14 13h6" stroke="var(--red-accent)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'pneus':
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="var(--red-accent)" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" stroke="var(--red-accent)" strokeWidth="1.8" />
        </svg>
      );
  }
}

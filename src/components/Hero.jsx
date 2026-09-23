import './Hero.css';

const FEATURES = ['Diagnóstico', 'Programação', 'Freios', 'Airbag', 'Suspensão e Pneus'];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Antes de trocar,
            <br />
            a gente <span className="hero__title-accent">verifica</span>.
          </h1>
          <p className="hero__subtitle">
            Seu carro apresenta barulho, falha, luz no painel ou algum
            comportamento diferente?
            <br />
            <br />
            Na Car X, primeiro avaliamos e confirmamos o que está
            acontecendo. Depois mostramos o que encontramos, explicamos as
            prioridades e orientamos as possibilidades.
            <br />
            <br />
            <strong>Você entende. A gente orienta. Você decide.</strong>
          </p>

          <ul className="hero__features">
            {FEATURES.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              href="https://wa.me/554792288950"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__btn"
            >
              <WhatsAppIcon />
              Contar o que está acontecendo
            </a>
            <a href="#metodo" className="btn btn-outline hero__btn-secondary">
              Conhecer o método Car X
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img
            src="/car-hero.jpg"
            alt="Veículo em oficina especializada Car X Auto Center"
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="var(--red-accent)" opacity="0.15" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.13-2.9-7-1.87-1.87-4.35-2.94-7.01-2.94Zm0 18.1a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.53 3.69-8.22 8.25-8.22 2.2 0 4.27.86 5.83 2.42a8.15 8.15 0 0 1 2.41 5.81c0 4.53-3.69 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

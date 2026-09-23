import './Footer.css';

// TODO: troque pelos links reais das redes sociais da Car X Auto Center.
const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  whatsapp: 'https://wa.me/554792288950',
  youtube: '#',
};

// TODO: troque pelo endereço real e, se preferir, cole o link "Compartilhar"
// do Google Maps no lugar de MAPS_LINK (evita depender de geocodificação por texto).
const ADDRESS_LINE_1 = 'R. 418, 475 - Morretes';
const ADDRESS_LINE_2 = 'Itapema - SC, 88220-000<, 88220-000';
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`
)}`;

// TODO: substitua pela nota e quantidade reais do Google Perfil da Empresa
// (deixe null para ocultar o bloco até ter os dados reais).
const GOOGLE_RATING = null; // ex.: 4.9
const GOOGLE_REVIEW_COUNT = null; // ex.: 128

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <span className="footer__logo-mark">X</span>
            <span className="footer__logo-text">
              Car X
              <small>Auto Center</small>
            </span>
          </a>
          <p className="footer__tagline">Diagnóstico claro. Decisão segura.</p>

          {GOOGLE_RATING && (
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="footer__reviews">
              <StarIcon />
              <strong>{GOOGLE_RATING}</strong>
              <span>({GOOGLE_REVIEW_COUNT} avaliações no Google)</span>
            </a>
          )}

          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="footer__directions">
            <PinIcon />
            Como chegar
          </a>

          <div className="footer__social">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#metodo">Método Car X</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Diferenciais</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <ul>
            {/* TODO: confirme telefone fixo e e-mail reais */}
            <li>(47) 9228-8950</li>
            <li>contato@carxautocenter.com.br</li>
            <li>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Horário de funcionamento</h4>
          <ul>
            <li>Segunda a Quinta: 08:15h às 18h</li>
            <li>Sexta: 09h às 18h</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© 2026 Car X Auto Center. Todos os direitos reservados.</span>
        <div className="footer__legal">
          {/* TODO: apontar para as páginas reais de Política de Privacidade e Termos de Uso */}
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5b400" aria-hidden="true"><path d="M12 2.5l2.9 6.3 6.8.7-5.1 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.1-4.7 6.8-.7L12 2.5Z" /></svg>;
}
function PinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" /></svg>;
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}
function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2l1-3h-3v-1.5c0-.3.2-.5.5-.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.13-2.9-7-1.87-1.87-4.35-2.94-7.01-2.94Z" /></svg>;
}
function YoutubeIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" /></svg>;
}

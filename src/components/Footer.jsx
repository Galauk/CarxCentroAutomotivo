import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <span className="footer__logo-mark">X</span>
            <span className="footer__logo-text">
              Car-X
              <small>Auto Center</small>
            </span>
          </a>
          <p>Cuidado, confiança e tecnologia para manter seu veículo sempre em movimento.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="WhatsApp"><WhatsAppIcon /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <ul>
            <li>(47) 9228-8950</li>
            <li>R. 418, 475 - Morretes<br />Itapema - SC, 88220-000</li>
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
        <span>© 2026 Car-X Auto Center. Todos os direitos reservados.</span>
        <div className="footer__legal">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
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

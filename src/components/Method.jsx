import './Method.css';

const STEPS = [
  'Escutamos o que o cliente percebeu.',
  'Avaliamos os sinais do veículo.',
  'Confirmamos antes de condenar uma peça.',
  'Mostramos o que encontramos.',
  'Explicamos as prioridades.',
  'O cliente decide.',
];

export default function Method() {
  return (
    <section id="metodo" className="method">
      <div className="container">
        <p className="method__eyebrow">Método Car X</p>
        <h2 className="method__title">Clareza antes de qualquer decisão</h2>

        <ol className="method__steps">
          {STEPS.map((step, i) => (
            <li key={step} className="method__step">
              <span className="method__step-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="method__step-text">{step}</span>
            </li>
          ))}
        </ol>

        <p className="method__closing">Menos suposição. Mais evidência.</p>
      </div>
    </section>
  );
}

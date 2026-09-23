# Car X Auto Center — Site React

Site institucional em React (Vite) com o novo posicionamento de marca:
diagnóstico antes da troca, linguagem simples e humana, e o Método Car X
em destaque.

## Estrutura

```
carx-site/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── car-hero.jpg        ← foto real do carro/oficina (recortada do mockup)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← variáveis de tema (cores, fontes, radius)
    └── components/
        ├── Header.jsx / .css
        ├── Hero.jsx / .css       ← "Antes de trocar, a gente verifica."
        ├── Method.jsx / .css     ← NOVA seção: Método Car X (6 etapas)
        ├── Services.jsx / .css
        ├── About.jsx / .css      ← seção "Diferenciais" (4 itens)
        ├── CTA.jsx / .css        ← chamada final
        └── Footer.jsx / .css
```

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## O que foi ajustado nesta rodada (posicionamento 2026)

- **Hero**: título "Antes de trocar, a gente verifica.", novo texto de
  contexto, botão principal "Contar o que está acontecendo" e botão
  secundário "Conhecer o método Car X" (âncora para a nova seção).
- **Nova seção Método Car X** (`Method.jsx`): as 6 etapas do processo
  (escutar → avaliar → confirmar → mostrar → explicar → decidir) e a frase
  de fechamento "Menos suposição. Mais evidência."
- **Diferenciais** (`About.jsx`): os 3 itens genéricos foram trocados pelos
  4 comportamentos concretos do briefing (diagnóstico antes da troca, você
  vê o que encontramos, prioridades bem definidas, serviço somente com
  autorização).
- **Chamada final** (`CTA.jsx`): título "Percebeu algo diferente no seu
  carro?" e botão único "Falar com a Car X".
- **Marca**: padronizada como "Car X Auto Center" em todo o site (sem
  alternar com "Car-X").
- **WhatsApp**: corrigido em todos os pontos para
  `https://wa.me/554792288950` (sem o `+`).

## ⚠️ Pendências que exigem dado real (marcadas com `// TODO` no código)

Estes pontos foram deixados sinalizados no código porque dependem de
informação real da empresa — não preenchi com dados fictícios:

1. **`Footer.jsx`**
   - `SOCIAL_LINKS`: links reais de Instagram, Facebook e YouTube (hoje `#`).
   - `GOOGLE_RATING` / `GOOGLE_REVIEW_COUNT`: nota e quantidade reais do
     Google Perfil da Empresa — o bloco de avaliações só aparece quando
     esses valores forem preenchidos (estão como `null`).
   - `ADDRESS_LINE_1` / `ADDRESS_LINE_2`: confirme o endereço real (o botão
     "Como chegar" usa esse endereço para montar o link do Google Maps).
   - Telefone fixo e e-mail de contato.
   - `/politica-de-privacidade` e `/termos-de-uso`: apontam para páginas
     que ainda precisam existir.
2. **Fotos**: a orientação pede fotos reais da equipe, da oficina e do
   momento em que o diagnóstico é mostrado ao cliente. Hoje só a foto do
   hero (`public/car-hero.jpg`) é real (recortada do mockup enviado); as
   demais seções ainda não têm espaço de imagem — posso adicionar uma
   galeria/seção de fotos se você tiver o material.

## Personalização rápida

- **Cores**: variáveis em `src/index.css` (`--red-accent`, `--bg-primary`, etc).
- **Serviços**: array `SERVICES` em `Services.jsx` (mantém as 6 categorias:
  diagnóstico, programação, freios, airbag, suspensão, pneus).
- **Ícones**: todos em SVG inline, sem dependências externas.

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy (Vercel, Netlify, etc).

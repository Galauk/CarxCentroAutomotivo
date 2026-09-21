# Car-X Auto Center — Site React

Site institucional em React (Vite), replicando o layout enviado: header fixo,
hero com CTA para WhatsApp, grid de 6 serviços, seção "Sobre/Diferenciais",
banner de CTA e footer completo.

## Estrutura

```
carx-site/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── car-hero.jpg        ← coloque aqui a foto do carro/oficina (hero)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← variáveis de tema (cores, fontes, radius)
    └── components/
        ├── Header.jsx / .css
        ├── Hero.jsx / .css
        ├── Services.jsx / .css
        ├── About.jsx / .css
        ├── CTA.jsx / .css
        └── Footer.jsx / .css
```

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Personalização rápida

- **Cores**: edite as variáveis em `src/index.css` (`--red-accent`, `--bg-primary`, etc).
- **Textos e telefones**: estão diretamente nos componentes (`Header.jsx`,
  `Hero.jsx`, `CTA.jsx`, `Footer.jsx`) — troque os números de WhatsApp/telefone
  e o e-mail pelos reais.
- **Imagem do hero**: substitua `public/car-hero.jpg` pela foto real do carro/oficina.
- **Serviços**: a lista de 6 cards está no array `SERVICES` dentro de
  `Services.jsx` — adicione, remova ou edite itens ali.
- **Ícones**: todos os ícones são SVG inline (sem dependências externas),
  fáceis de trocar por uma lib como `lucide-react` se preferir.

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy (Vercel, Netlify, etc).

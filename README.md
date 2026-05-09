# SG Consultoria e Assessoria

Website institucional da SG Consultoria e Assessoria, desenvolvido em React com Vite e preparado para publicação em GitHub Pages.

## Stack

- React
- Vite
- CSS organizado por responsabilidade
- GitHub Pages
- FormSubmit para submissão do formulário
- Páginas legais estáticas em PT/EN

## Funcionalidades

- Website bilingue: Português e Inglês, com idioma persistido em `localStorage`.
- Navegação por âncoras com estado ativo no scroll, incluindo a secção Abordagem.
- Menu mobile hamburguer.
- Preloader inicial.
- Animações de entrada ao fazer scroll, com stagger nos cartões.
- Secção Abordagem com pilares e citação destacada.
- Formulário de contacto com todos os campos obrigatórios, incluindo telemóvel.
- Envio do formulário para `geral@sgconsultoria.pt` via FormSubmit.
- Mapas do Google Maps embutidos por escritório (Portugal, Brasil, Cabo Verde) sem necessidade de API key.
- Footer com contactos, moradas, redes sociais, políticas legais e crédito PrimeSystems.
- SEO base com Open Graph, Twitter Cards, manifest, `robots.txt`, `sitemap.xml` e JSON-LD.

## Estrutura

```txt
.
├── .github/workflows/deploy.yml
├── docs/
│   └── ARCHITECTURE.md
├── public/
│   ├── assets/
│   │   ├── sg-about.png
│   │   └── sg-logo.png
│   ├── CNAME
│   ├── politica-de-privacidade.html
│   ├── privacy-policy.html
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── sitemap.xml
│   ├── termos-de-servico.html
│   └── terms-of-service.html
├── src/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Desenvolvimento

Instalar dependências:

```bash
npm install
```

Arrancar em local:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

## Onde alterar conteúdo

O conteúdo principal vive em `src/data/siteData.js`.

Alterar aí:

- textos PT/EN;
- navegação;
- metadados;
- contactos;
- links das redes sociais;
- moradas;
- áreas de atuação;
- assuntos do formulário;
- textos do footer.

As páginas legais ficam em:

- `public/politica-de-privacidade.html`
- `public/privacy-policy.html`
- `public/termos-de-servico.html`
- `public/terms-of-service.html`

## Formulário

O formulário usa FormSubmit:

```js
formEndpoint: "https://formsubmit.co/ajax/geral@sgconsultoria.pt"
```

Todos os campos visíveis são obrigatórios:

- Nome
- Email
- Telemóvel (com `pattern` para evitar lixo)
- Assunto
- Mensagem

Nota: no primeiro envio, o FormSubmit envia um email de activação a `geral@sgconsultoria.pt`. Após carregar no botão `Activate`, todos os pedidos passam a chegar directamente sem mais validação.

## Mapas dos escritórios

Cada escritório em [`siteData.js`](src/data/siteData.js) tem um campo `mapEmbed` com os parâmetros que o iframe injecta na URL `https://www.google.com/maps?<params>&output=embed`.

Formatos aceites:

- `cid=<numeric>`: aponta para uma ficha de empresa registada no Google Maps (mostra nome, fotos, botão "Abrir no Maps"). Usado em Lisboa.
- `q=<address>` ou `q=<lat,lng>`: query de morada ou coordenadas.

Não é necessária API key. Funciona em qualquer hosting estático, incluindo GitHub Pages.

## Deploy

O deploy está configurado em `.github/workflows/deploy.yml`.

O domínio próprio está definido em:

```txt
public/CNAME
```

Para o domínio `sgconsultoria.pt`, o `base` do Vite deve ficar em `/`.

Se o projeto for publicado sem domínio próprio, por exemplo em `username.github.io/repositorio`, definir:

```bash
VITE_BASE_PATH=/repositorio/
```

antes do build.

## Manutenção

Ver detalhes em `docs/ARCHITECTURE.md`.

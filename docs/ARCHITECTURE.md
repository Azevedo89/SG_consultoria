# Arquitetura

Este projeto está organizado para separar conteúdo, componentes, secções e estilos. A home é montada por composição, evitando concentrar lógica e layout num único ficheiro.

## Visão geral

```txt
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── cards/
│   ├── forms/
│   ├── layout/
│   └── ui/
├── data/
│   └── siteData.js
├── sections/
└── styles/
```

## Entrada da app

- `src/main.jsx`: monta a aplicação React.
- `src/App.jsx`: controla idioma, metadata dinâmica, scroll reveal, preloader, header, secções e footer.

O idioma escolhido é persistido em `window.localStorage` sob a chave `language`. Ao recarregar a página ou navegar para uma das páginas legais estáticas (`/politica-de-privacidade.html`, `/privacy-policy.html`, etc.) e voltar, a preferência é mantida.

Ordem atual das secções:

1. Hero
2. Método
3. Abordagem
4. Áreas de atuação
5. Experiência executiva
6. Contactos
7. Footer

## Conteúdo

O ficheiro central de conteúdo é:

```txt
src/data/siteData.js
```

Inclui:

- `siteMeta`: títulos, descrições e locale.
- `anchorIds`: âncoras traduzidas por idioma (`home`, `method`, `approach`, `services`, `about`, `contact`).
- `navigation`: itens da navbar.
- `contacts`: telefone, email e endpoint do formulário (FormSubmit).
- `socialLinks`: Instagram, LinkedIn e Facebook.
- `offices`: moradas de Portugal, Brasil e Cabo Verde, cada uma com `mapEmbed` para o iframe do Google Maps.
- `copy`: textos PT/EN do website, incluindo bloco `approach` com `kicker`, `title`, `lead`, `quote` e `quoteCaption`.
- `heroFacts`: métricas do hero.
- `processSteps`: passos do método.
- `approachPillars`: pilares da secção Abordagem (3 cartões com `number`, `eyebrow`, `title`, `text`).
- `services`: áreas de atuação.
- `trustMarkers`: marcadores de confiança.
- `contactSubjects`: opções do formulário.

Regra prática: se for texto, link, contacto, morada ou item de lista, começar por `siteData.js`.

## Componentes

### Layout

```txt
src/components/layout/
```

- `Header.jsx`: navbar, idioma, estado ativo no scroll e menu mobile.
- `Footer.jsx`: footer, moradas, contactos, links legais e redes sociais.
- `Brand.jsx`: logotipo e texto da marca.

### UI

```txt
src/components/ui/
```

- `Button.jsx`: botões principais e ghost.
- `Preloader.jsx`: carregamento inicial.
- `SectionHeading.jsx`: cabeçalhos das secções.
- `SocialIcon.jsx`: ícones das redes sociais.

### Cards

```txt
src/components/cards/
```

- `ProcessCard.jsx`: cartões do método.
- `ServiceCard.jsx`: cartões das áreas de atuação.

### Formulário

```txt
src/components/forms/ContactForm.jsx
```

Responsável por:

- estado dos campos;
- validação obrigatória via HTML;
- submissão AJAX para FormSubmit;
- fallback com `action` e `method`;
- mensagens de sucesso/erro.

## Secções

```txt
src/sections/
```

- `Hero.jsx`
- `Method.jsx`
- `Approach.jsx`
- `Services.jsx`
- `About.jsx`
- `Contact.jsx`

Cada secção recebe `language` e vai buscar os textos ao `siteData.js`.

A secção Abordagem é composta por:

- cabeçalho com kicker e título numa só linha (`white-space: nowrap` em `.approach .section-heading h2`);
- parágrafo de lead;
- grelha de 3 pilares com stagger reveal (90ms / 180ms);
- citação destacada com aspa serif decorativa.

A secção Contactos contém o formulário e, em bloco full-width abaixo do `.contact__grid`, três cartões `.office-card` com morada e iframe do Google Maps. O iframe é absolutamente posicionado dentro de um contentor com `overflow: hidden` para permitir clipping consistente.

## Estilos

```txt
src/styles/
├── base.css
├── layout.css
├── components.css
└── sections.css
```

- `base.css`: tokens, reset, estilos globais e containers base.
- `layout.css`: header, footer, navegação e estrutura global.
- `components.css`: botões, cards, formulário, preloader, ícones e componentes reutilizáveis.
- `sections.css`: hero e estilos específicos das secções.

## Responsividade

Breakpoints principais:

- `380px`: telemóveis muito pequenos.
- `760px`: mobile.
- `900px`: tablets intermédios.
- `1020px`: troca para navegação mobile/tablet.
- `1440px`: desktop grande.
- `1800px`: monitores muito largos.

O site foi ajustado para evitar scroll horizontal, manter o hero compacto no mobile e preservar o conteúdo essencial também em ecrãs pequenos.

## SEO e ficheiros públicos

```txt
public/
```

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `CNAME`
- páginas legais PT/EN
- imagens em `public/assets` (`sg-logo.png`, `sg-favicon.png`, `sg-about.png`)

O `index.html` inclui:

- metadata base;
- Open Graph;
- Twitter Cards;
- JSON-LD com contactos, redes sociais e moradas.

## Páginas legais

As páginas legais são HTML estático em `public/` para serem servidas diretamente pelo GitHub Pages:

- `politica-de-privacidade.html`
- `privacy-policy.html`
- `termos-de-servico.html`
- `terms-of-service.html`

Estas páginas não passam pelo React Router, porque o site é uma single page sem router dedicado. O `Footer.jsx` escolhe o ficheiro a apontar consoante o idioma activo (`/privacy-policy.html` em EN, `/politica-de-privacidade.html` em PT, etc.). A preferência de idioma é preservada via `localStorage`, por isso ao voltar à home a partir destas páginas o idioma escolhido é mantido.

Ambas as versões (PT e EN) referem o FormSubmit como prestador técnico do formulário e o Google Maps como serviço de mapas embutidos, para conformidade com regras de transparência.

## Mapas dos escritórios

Cada `office` em `siteData.js` tem um campo `mapEmbed` cujo valor é injectado em
`https://www.google.com/maps?<mapEmbed>&output=embed`. Suporta:

- `cid=<numeric>`: ficha de empresa registada no Google Maps. Usado em Lisboa para apresentar o cartão "Sérgio Gouveia – Consultoria e Assessoria, S.A.".
- `q=<address>` ou `q=<lat,lng>`: query de morada ou coordenadas. Usado em Brasil e Cabo Verde.

O iframe usa `loading="lazy"` e CORS público da Google. Não é necessária API key, billing nem registo no Google Cloud Console.

O CSS aplica um filtro `grayscale + invert` para harmonizar o mapa com o tema escuro do site, e clipa o iframe via `overflow: hidden` no contentor com `position: absolute` no iframe (altura propositadamente maior que a janela visível).

## Deploy

O workflow fica em:

```txt
.github/workflows/deploy.yml
```

Fluxo:

1. checkout do repositório;
2. instalação de dependências;
3. build com Vite;
4. publicação da pasta `dist` no GitHub Pages.

O domínio próprio é controlado por:

```txt
public/CNAME
```

## Checklist antes de publicar

- Correr `npm run build`.
- Confirmar que o primeiro envio do FormSubmit foi validado no email (botão `Activate`).
- Verificar `public/CNAME`.
- Confirmar `public/sitemap.xml`.
- Rever textos legais (PT e EN) antes de publicação final.
- Confirmar que os 3 mapas dos escritórios apontam para a localização correcta.
- Testar mobile, tablet e desktop, e o switch de idioma com navegação para páginas legais.

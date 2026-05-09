export const assets = {
  logo: "/assets/sg-logo.png",
  about: "/assets/sg-about.png",
};

export const siteMeta = {
  url: "https://sgconsultoria.pt/",
  name: "SG Consultoria e Assessoria",
  title: {
    pt: "SG Consultoria e Assessoria | Consultoria e Assessoria empresarial",
    en: "SG Consulting and Advisory | Consulting and business advisory",
  },
  description: {
    pt: "Consultoria e Assessoria societária, documental e empresarial para clientes exigentes em Portugal, Brasil e Cabo Verde.",
    en: "Corporate, document and business consulting for demanding clients in Portugal, Brazil and Cape Verde.",
  },
  locale: {
    pt: "pt_PT",
    en: "en_US",
  },
};

export const anchorIds = {
  pt: {
    home: "inicio",
    method: "metodo",
    approach: "abordagem",
    services: "areas-de-atuacao",
    about: "experiencia-executiva",
    contact: "contactos",
  },
  en: {
    home: "home",
    method: "method",
    approach: "approach",
    services: "practice-areas",
    about: "executive-experience",
    contact: "contacts",
  },
};

export const navigation = {
  pt: [
    { label: "Início", target: "home" },
    { label: "Método", target: "method" },
    { label: "Abordagem", target: "approach" },
    { label: "Áreas de atuação", target: "services" },
    { label: "Experiência Executiva", target: "about" },
  ],
  en: [
    { label: "Home", target: "home" },
    { label: "Method", target: "method" },
    { label: "Approach", target: "approach" },
    { label: "Practice areas", target: "services" },
    { label: "Executive Experience", target: "about" },
  ],
};

export const headerLabels = {
  pt: { contact: "Contacto" },
  en: { contact: "Contact" },
};

export const contacts = {
  phone: "+351 939 153 029",
  phoneHref: "tel:+351939153029",
  email: "geral@sgconsultoria.pt",
  emailHref: "mailto:geral@sgconsultoria.pt",
  formEndpoint: "https://formsubmit.co/ajax/geral@sgconsultoria.pt",
};

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sgconsultoriasa/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/consultor-sergio-gouveia/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100076080734904",
  },
];

export const offices = [
  {
    country: "Portugal",
    company: "SG Consultoria",
    lines: ["Avenida do Atlântico, Nº 16,", "escritório 5.07", "1990-019 Lisboa"],
    mapEmbed: "cid=10450037140987630932",
  },
  {
    country: "Brasil",
    company: "SG Consultoria",
    lines: ["Avenida Paulista, 726", "17º Andar, Conjunto 1707", "Bela Vista, São Paulo - SP", "CEP: 01310-910"],
    mapEmbed: "q=Avenida+Paulista+726,+Bela+Vista,+São+Paulo,+Brazil",
  },
  {
    country: "Cabo Verde",
    company: "SG Consultoria",
    lines: ["19 Rua Justino Lopes,", "Plateau, Praia - 7600 Cabo Verde"],
    mapEmbed: "q=Sodeza+Tours+Plateau+Praia+Cabo+Verde",
  },
];

export const copy = {
  pt: {
    hero: {
      eyebrow: "Portugal, Brasil e Cabo Verde · Consultoria e Assessoria",
      title: "SG Consultoria e Assessoria",
      lead: "Apoio societário, documental e empresarial para decisões exigentes.",
      primary: "Solicitar análise",
      secondary: "Ver áreas de atuação",
      imageLabel: "Documentos empresariais e assinatura profissional",
      factsLabel: "Destaques",
    },
    method: {
      kicker: "Método",
      title: "Do diagnóstico à execução.",
    },
    approach: {
      kicker: "Abordagem",
      title: "Decisões estruturadas. Crescimento sustentável.",
      lead: "Apoiamos empresas, investidores e grupos empresariais em momentos determinantes: crescimento, reestruturação, investimento e redefinição estratégica.",
      quote: "Decisões bem estruturadas, sustentadas por análise, experiência e visão estratégica, são fundamentais para criar valor.",
      quoteCaption: "Posicionamento SG Consultoria",
    },
    services: {
      kicker: "Áreas de atuação",
      title: "Consultoria e Assessoria empresarial.",
    },
    about: {
      kicker: "Experiência executiva",
      title: "Consultoria e Assessoria com postura de parceiro estratégico.",
      text: "Rigor técnico, leitura empresarial e acompanhamento direto para decisões bem suportadas.",
      imageAlt: "Mesa de trabalho com documentos empresariais e caneta",
    },
    contact: {
      kicker: "Contactos",
      title: "Descreva-nos o seu caso.",
      text: "Envie os detalhes essenciais e indique o melhor contacto.",
      directLabel: "Contactos diretos",
      phone: "Telefone",
      email: "Email",
    },
    form: {
      name: "Nome",
      email: "Email",
      phone: "Telemóvel",
      subject: "Assunto",
      subjectPlaceholder: "Selecione uma área",
      message: "Mensagem",
      submit: "Enviar pedido",
      sending: "A enviar pedido...",
      note: "Pedido enviado com sucesso.",
      error: "Não foi possível enviar. Tente novamente ou contacte-nos por email.",
      missingEndpoint: "Configure o endpoint do formulário antes de publicar.",
      noPhone: "Nao indicado",
      mailSubject: "Pedido de contacto",
    },
    footer: {
      tagline: "Consultoria e Assessoria empresarial para clientes exigentes.",
      navigation: "Navegação",
      contacts: "Contactos",
      offices: "Escritórios",
      social: "Redes sociais",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      rights: "Todos os direitos reservados.",
      credit: "Website desenvolvido por",
    },
    preloader: "A carregar website",
  },
  en: {
    hero: {
      eyebrow: "Portugal, Brazil and Cape Verde · Consulting and advisory",
      title: "SG Consulting and Advisory",
      lead: "Corporate, document and business support for demanding decisions.",
      primary: "Request analysis",
      secondary: "View practice areas",
      imageLabel: "Business documents and professional signature",
      factsLabel: "Highlights",
    },
    method: {
      kicker: "Method",
      title: "From diagnosis to execution.",
    },
    approach: {
      kicker: "Approach",
      title: "Structured decisions. Sustainable growth.",
      lead: "We support companies, investors and business groups at pivotal moments: growth, restructuring, investment and strategic redefinition.",
      quote: "Well-structured decisions, grounded in analysis, experience and strategic vision, are essential to create value.",
      quoteCaption: "SG Consultoria positioning",
    },
    services: {
      kicker: "Practice areas",
      title: "Consulting and business advisory.",
    },
    about: {
      kicker: "Executive experience",
      title: "Consulting and advisory with a strategic partner mindset.",
      text: "Technical rigor, business judgement and direct support for well-founded decisions.",
      imageAlt: "Work table with business documents and pen",
    },
    contact: {
      kicker: "Contacts",
      title: "Tell us about your case.",
      text: "Send the key details and your preferred contact.",
      directLabel: "Direct contacts",
      phone: "Phone",
      email: "Email",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      subjectPlaceholder: "Select an area",
      message: "Message",
      submit: "Send request",
      sending: "Sending request...",
      note: "Request sent successfully.",
      error: "Unable to send. Please try again or contact us by email.",
      missingEndpoint: "Configure the form endpoint before publishing.",
      noPhone: "Not provided",
      mailSubject: "Contact request",
    },
    footer: {
      tagline: "Consulting and business advisory for demanding clients.",
      navigation: "Navigation",
      contacts: "Contacts",
      offices: "Offices",
      social: "Social media",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
      credit: "Website by",
    },
    preloader: "Loading website",
  },
};

export const heroFacts = {
  pt: [
    { value: "24h", label: "Análise inicial do caso" },
    { value: "3", label: "Presenças: Portugal, Brasil e Cabo Verde" },
    { value: "1:1", label: "Acompanhamento direto" },
  ],
  en: [
    { value: "24h", label: "Initial case review" },
    { value: "3", label: "Presence in Portugal, Brazil and Cape Verde" },
    { value: "1:1", label: "Direct support" },
  ],
};

export const processSteps = {
  pt: [
    {
      number: "01",
      title: "Descreva-nos o problema",
      text: "Recolhemos os elementos essenciais, avaliamos urgência e identificamos riscos.",
    },
    {
      number: "02",
      title: "Definimos a solução",
      text: "Estruturamos o caminho documental, societário ou empresarial com prioridades claras.",
    },
    {
      number: "03",
      title: "Executamos com acompanhamento",
      text: "Tratamos do processo com comunicação objetiva e foco em resultado mensurável.",
    },
  ],
  en: [
    {
      number: "01",
      title: "Tell us the issue",
      text: "We gather key facts, assess urgency and identify risks.",
    },
    {
      number: "02",
      title: "We define the solution",
      text: "We structure the document, corporate or business path with clear priorities.",
    },
    {
      number: "03",
      title: "We execute with follow-up",
      text: "We handle the process with objective communication and a results focus.",
    },
  ],
};

export const services = {
  pt: [
    {
      icon: "S",
      title: "Corporate",
      items: ["Constituição de sociedades", "Cessão de quota, compra e venda de participações", "Fusões, cisões e transformação societária"],
    },
    {
      icon: "R",
      title: "Registos e imobiliário",
      items: ["Compra e venda, doação e hipoteca", "Registo predial e automóvel", "Propriedade horizontal"],
    },
    {
      icon: "D",
      title: "Documentos e certificações",
      items: ["Certificação de documentos", "Autenticação de documentos particulares", "Reconhecimentos simples e especiais"],
    },
    {
      icon: "C",
      title: "Contratos de gestão",
      items: ["Contratos promessa", "Contratos de arrendamento e trabalho", "Registo de marcas"],
    },
  ],
  en: [
    {
      icon: "C",
      title: "Corporate",
      items: ["Company incorporation", "Share transfers and stock sales", "Mergers, spin-offs and corporate changes"],
    },
    {
      icon: "R",
      title: "Registrations and real estate",
      items: ["Purchase, sale, donation and mortgage", "Property and vehicle registration", "Horizontal property"],
    },
    {
      icon: "D",
      title: "Documents and certifications",
      items: ["Document certification", "Authentication of private documents", "Simple and special recognitions"],
    },
    {
      icon: "A",
      title: "Agreements and management",
      items: ["Promissory agreements", "Lease and employment contracts", "Trademark registration"],
    },
  ],
};

export const approachPillars = {
  pt: [
    {
      number: "01",
      eyebrow: "Quando intervimos",
      title: "Momentos determinantes",
      text: "Crescimento, reestruturação, redefinição estratégica, reorganização interna ou preparação para investimento.",
    },
    {
      number: "02",
      eyebrow: "Como pensamos",
      title: "Visão integrada",
      text: "Performance operacional alinhada com objetivos financeiros de médio e longo prazo, articulando análise, experiência e perspetiva estratégica.",
    },
    {
      number: "03",
      eyebrow: "O que entregamos",
      title: "Solidez e eficiência",
      text: "Soluções ajustadas à realidade de cada organização, com foco em criar valor de forma consistente e sustentável.",
    },
  ],
  en: [
    {
      number: "01",
      eyebrow: "When we step in",
      title: "Pivotal moments",
      text: "Growth, restructuring, strategic redefinition, internal reorganisation or preparation for investment.",
    },
    {
      number: "02",
      eyebrow: "How we think",
      title: "Integrated view",
      text: "Operational performance aligned with medium- and long-term financial goals, blending analysis, experience and strategic perspective.",
    },
    {
      number: "03",
      eyebrow: "What we deliver",
      title: "Strength and efficiency",
      text: "Solutions tailored to each organisation, focused on creating value consistently and sustainably.",
    },
  ],
};

export const trustMarkers = {
  pt: [
    "Confidencialidade em todas as fases",
    "Comunicação direta com decisores",
    "Preparação documental rigorosa",
    "Atuação em Portugal, Brasil e Cabo Verde",
  ],
  en: [
    "Confidentiality at every stage",
    "Direct communication with decision-makers",
    "Rigorous document preparation",
    "Presence in Portugal, Brazil and Cape Verde",
  ],
};

export const contactSubjects = {
  pt: ["Corporate", "Registos e imobiliário", "Documentos e certificações", "Contratos de gestão", "Outro assunto"],
  en: ["Corporate", "Registrations and real estate", "Documents and certifications", "Agreements and management", "Other matter"],
};

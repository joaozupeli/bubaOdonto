/**
 * ============================================================
 * DADOS DA CLÍNICA — Buba Odontologia
 * Demo personalizado a partir de odontoproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Buba Odontologia',
  shortName: 'Buba',
  discipline: 'Odontologia',
  established: 2015,

  tagline: 'Odontologia completa, pontual e sem enrolação',
  shortDescription:
    'Clínica multidisciplinar no Cristo Rei, Curitiba — implantes, prótese, ortodontia, clareamento e HOF, com agendamento pelo WhatsApp.',

  hero: {
    kicker: 'Cristo Rei · Curitiba',
    lines: ['Cuidado objetivo', 'para a sua'],
    lineAccent: 'rotina.',
    lead:
      'Avaliação clara, plano transparente e equipe especializada no mesmo lugar. Ideal para quem tem agenda corrida.',
  },

  whatsapp: '5541997580067',
  whatsappDisplay: '(41) 99758-0067',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma avaliação na Buba Odontologia.',

  phone: '(41) 99758-0067',
  phoneAlt: '(41) 3538-8308',
  email: 'contato@bubaodonto.com.br',

  address: {
    street: 'Av. São José, 618 — Sala 302',
    neighborhood: 'Cristo Rei',
    city: 'Curitiba',
    state: 'PR',
    zip: '80050-350',
    full: 'Av. São José, 618 — Sala 302, Edifício Botânico Business Center, Cristo Rei, Curitiba — PR, 80050-350',
  },

  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  social: {
    instagram: null,
    facebook: null,
    youtube: null,
  },

  stats: [
    { value: 5.0, suffix: '', label: 'Avaliação Doctoralia' },
    { value: 750, suffix: '+', label: 'Opiniões de pacientes' },
    { value: 98, suffix: '%', label: 'Indicariam a clínica' },
    { value: 1, suffix: '', label: 'Canal direto no WhatsApp' },
  ],

  manifesto:
    'Atendimento pontual, explicações diretas e procedimentos com cuidado. Saúde bucal resolvida com clareza — sem drama e sem surpresa na conta.',

  principles: [
    {
      title: 'Pontualidade como padrão',
      text: 'Horário respeitado e consulta objetiva. Você sai sabendo o que precisa fazer e quanto tempo leva.',
    },
    {
      title: 'Plano transparente',
      text: 'Cada etapa com escopo e valor claros antes de começar. Sem surpresas na conta.',
    },
    {
      title: 'Multi-especialidade no mesmo endereço',
      text: 'Implantes, prótese, ortodontia, clareamento e HOF — sem ficar correndo de clínica em clínica.',
    },
    {
      title: 'WhatsApp sempre perto',
      text: 'Dúvidas, agendamentos e retornos com resposta humana, no canal que você já usa.',
    },
  ],
}

export const services = [
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Avaliação completa, prevenção e o reparo do que já deu problema.',
    detail:
      'Consulta cuidadosa de entrada, exame clínico e plano preventivo. Você sai com o mapa da sua boca e a ordem ideal de tratamento.',
    topics: ['Avaliação', 'Prevenção', 'Restaurações', 'Limpeza'],
    icon: 'tooth',
  },
  {
    id: 'implantes',
    title: 'Implantes',
    description: 'Reabilitação guiada, do planejamento à coroa definitiva.',
    detail:
      'Planejamento cuidadoso, prótese provisória quando o caso permite e acompanhamento no pós.',
    topics: ['Cirurgia', 'Prótese sobre implante', 'Reabilitação'],
    icon: 'implant',
  },
  {
    id: 'protese',
    title: 'Prótese',
    description: 'Coroas, pontes e próteses planejadas para função e estética.',
    detail:
      'Materiais e encaixe pensados para mastigar bem e ficar natural. Ajustes com acompanhamento próximo.',
    topics: ['Coroas', 'Pontes', 'Prótese removível'],
    icon: 'smile',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento com planejamento digital quando indicado.',
    detail:
      'Aparelho ou alinhadores conforme o caso. Você vê o caminho antes de começar.',
    topics: ['Alinhadores', 'Aparelho fixo', 'Planejamento'],
    icon: 'braces',
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Protocolo dosado para clarear sem sensibilidade excessiva.',
    detail:
      'Medimos a cor inicial, tratamos sensibilidade e ajustamos a concentração por sessão.',
    topics: ['Consultório', 'Caseiro', 'Manutenção'],
    icon: 'sparkle',
  },
  {
    id: 'hof',
    title: 'Harmonização (HOF)',
    description: 'Protocolos faciais complementares ao sorriso, com critério clínico.',
    detail:
      'Avaliação facial integrada à odontologia. Indicação clara do que faz sentido para o seu caso — sem exagero.',
    topics: ['Avaliação facial', 'Protocolos', 'Acompanhamento'],
    icon: 'child',
  },
]

export const ticker = [
  'Cristo Rei · Curitiba',
  'Implantes e prótese',
  'Ortodontia',
  'Clareamento',
  'HOF',
  'WhatsApp direto',
]

export const team = [
  {
    id: 'jessyca-buba',
    name: 'Dra. Jessyca Buba',
    role: 'Cirurgiã-dentista',
    tag: 'Condução clínica',
    category: 'clinical',
    photo: null,
    bio: 'Responsável pela Buba Odontologia no Botânico Business Center. Atendimento objetivo, multi-especialidade e foco em resultados previsíveis.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Implantes', 'Prótese', 'Ortodontia', 'HOF'],
    funFact: 'Prefere planos curtos e claros — menos rodeio, mais resultado.',
    showWhatsApp: true,
  },
  {
    id: 'recepcao',
    name: 'Recepção',
    role: 'Atendimento',
    tag: 'Primeiro contato',
    category: 'admin',
    photo: null,
    bio: 'Organiza a agenda e responde o WhatsApp com agilidade — o mesmo tom eficiente da clínica.',
    formation: 'Atendimento ao paciente',
    specialties: ['Agendamento', 'Acolhimento'],
    funFact: 'Quase sempre responde antes de você sair de casa.',
    showWhatsApp: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Paciente Doctoralia',
    rating: 5,
    text: 'Atendimento pontual e explicações diretas. Saí da consulta sabendo exatamente o próximo passo.',
    treatment: 'Avaliação',
    year: '2025',
  },
  {
    id: 2,
    name: 'Paciente Curitiba',
    rating: 5,
    text: 'Fiz o planejamento de implante com clareza de prazo e valor. Recomendo pela objetividade.',
    treatment: 'Implantes',
    year: '2025',
  },
  {
    id: 3,
    name: 'Paciente Cristo Rei',
    rating: 5,
    text: 'Clínica limpa, equipe atenciosa e WhatsApp que realmente responde. Prático para a rotina.',
    treatment: 'Clareamento',
    year: '2024',
  },
]

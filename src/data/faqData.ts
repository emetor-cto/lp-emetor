export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const allFaqs: FaqItem[] = [
  {
    id: 1,
    question: "O que a Emetor faz?",
    answer: "A Emetor estrutura a operação de empresas em três frentes: desenho de processo, desenvolvimento de sistema sob medida e aplicação de IA em pontos específicos da operação. Todo trabalho começa por um diagnóstico. A Emetor tem sede em Curitiba, no Paraná, e atende clientes em todo o Brasil.",
    category: "Geral",
  },
  {
    id: 2,
    question: "Como a Emetor cobra pelos serviços?",
    answer: "Por capacidade mensal de desenvolvimento contratada, e não por orçamento fechado de projeto. O cliente aprova o escopo antes de cada execução e acompanha o consumo de horas. O modelo evita o aditivo constante e o projeto que não termina. O valor é definido a partir do diagnóstico.",
    category: "Modelo",
  },
  {
    id: 3,
    question: "Sistema feito com IA é seguro?",
    answer: "Não por padrão. Ferramentas como Claude Code, Lovable, Cursor e Replit geram código funcional, mas raramente entregam controle de acesso por perfil, proteção de dados no banco, limite de requisição, log de auditoria e ambiente separado. A Emetor encontra pelo menos seis dessas falhas na maioria dos sistemas que audita.",
    category: "IA & Segurança",
  },
  {
    id: 4,
    question: "Fiz meu sistema no Lovable ou no Claude Code. Preciso jogar fora e refazer?",
    answer: "Na maioria dos casos, não. A Emetor faz uma auditoria técnica e classifica o que pode ser aproveitado, o que precisa ser reescrito e o que deve ser descartado. Reescrever tudo é a última opção. O que costuma faltar é arquitetura, segurança e estrutura de operação, não a funcionalidade em si.",
    category: "IA & Segurança",
  },
  {
    id: 5,
    question: "O que a Emetor analisa na auditoria de um sistema feito com IA?",
    answer: "A auditoria cobre cinco frentes: segurança da aplicação, proteção e integridade dos dados, arquitetura, adequação à LGPD e capacidade de operação. A entrega é um laudo com os riscos classificados por gravidade e um plano de correção em três ondas. O laudo pertence ao cliente.",
    category: "IA & Segurança",
  },
  {
    id: 6,
    question: "IA resolve problema de processo na empresa?",
    answer: "Não. IA aplicada a um processo mal desenhado entrega o resultado errado mais rápido e em maior volume. A Emetor sempre desenha o processo antes de aplicar tecnologia. A IA entra depois, em pontos com tarefa repetitiva, volume relevante e critério claro de acerto.",
    category: "Processos & IA",
  },
  {
    id: 7,
    question: "A Emetor desenvolve aplicativo?",
    answer: "Sim. A Emetor desenvolve aplicativos para iOS, Android e web voltados a operações específicas, como time de campo, força de vendas, entrega, assistência técnica e vistoria. O aplicativo é construído depois do desenho do processo, para registrar o dado no momento e no lugar em que o trabalho acontece.",
    category: "Desenvolvimento",
  },
  {
    id: 8,
    question: "Qual a diferença entre software sob medida e um sistema pronto?",
    answer: "Um sistema pronto obriga a empresa a adaptar o processo ao que a ferramenta permite. O sob medida faz o caminho inverso: o sistema é construído sobre o processo real. Sob medida vale quando a regra de negócio é parte do diferencial competitivo e nenhuma ferramenta pronta a atende.",
    category: "Soluções",
  },
  {
    id: 9,
    question: "O que é o Diagnóstico Operacional da Emetor?",
    answer: "É uma análise estruturada dos processos, sistemas e fluxos de informação de uma empresa. A Emetor mapeia como o trabalho acontece hoje, identifica gargalos e retrabalho e entrega um plano de prioridades em três ondas. O relatório pertence ao cliente, mesmo que ele não siga com a Emetor.",
    category: "Diagnóstico",
  },
  {
    id: 10,
    question: "O que é a Trilha Emetor?",
    answer: "A Trilha Emetor é a metodologia de entrega da Emetor, dividida em sete etapas: diagnóstico, desenho, escopo, construção, validação, implantação e operação assistida. Cada etapa tem entrega definida, prazo e critério de aceite mensurável. O cliente aprova formalmente antes de a etapa seguinte começar.",
    category: "Metodologia",
  },
  {
    id: 11,
    question: "Quanto tempo leva para colocar um sistema em produção?",
    answer: "Depende do escopo, mas a Emetor entrega em ciclos, não em uma única data final. Cada etapa da Trilha Emetor tem prazo próprio e critério de aceite, e o cliente tem 15 dias úteis para aprovar antes de a etapa seguinte começar. O prazo total sai do diagnóstico.",
    category: "Entrega",
  },
  {
    id: 12,
    question: "De quem é o software desenvolvido pela Emetor?",
    answer: "O cliente recebe licença exclusiva de uso por 120 meses, que depois se converte em licença perpétua e não exclusiva. O código-fonte fica depositado com agente de garantia, o escrow, e é liberado nas hipóteses previstas em contrato. A garantia de desempenho é de 12 meses.",
    category: "Propriedade Intel.",
  },
  {
    id: 13,
    question: "Preciso trocar os sistemas que já uso?",
    answer: "Não necessariamente. A Emetor avalia no diagnóstico o que manter, o que integrar e o que substituir. Em boa parte dos casos, a solução é conectar sistemas que já existem em vez de reconstruir tudo. Trocar sistema sem revisar processo apenas transfere o problema de lugar.",
    category: "Integração",
  },
  {
    id: 14,
    question: "A Emetor atende empresas fora de Curitiba?",
    answer: "Sim. A Emetor tem sede em Curitiba, no Paraná, e atende clientes em todo o Brasil de forma remota. O diagnóstico, as reuniões de método e a operação assistida acontecem online. Encontros presenciais podem ser combinados quando o projeto exige.",
    category: "Atendimento",
  },
];

export const homeFaqs = allFaqs.filter((f) => [1, 2, 3, 4, 9, 11, 14].includes(f.id));
export const sistemaIaFaqs = allFaqs.filter((f) => [3, 4, 5, 12].includes(f.id));
export const solucoesFaqs = allFaqs.filter((f) => [6, 7, 8, 12, 13].includes(f.id));
export const diagnosticoFaqs = allFaqs.filter((f) => [9, 13].includes(f.id));
export const trilhaFaqs = allFaqs.filter((f) => [10, 11].includes(f.id));
export const quemSomosFaqs = allFaqs.filter((f) => [14].includes(f.id));

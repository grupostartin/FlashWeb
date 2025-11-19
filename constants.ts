import { Check, X, Zap, Palette, DollarSign, Award, FileText, Users } from 'lucide-react';

export const COMPARISON_DATA = {
  oldWay: [
    "Estuda 1 ano para começar a trabalhar",
    "Sofre com bugs e códigos complexos",
    "Cobra caro, mas demora semanas para entregar",
    "Compete com milhares de programadores",
  ],
  newWay: [
    "Começa a criar no 1º dia de curso",
    "A I.A. escreve e corrige tudo para você",
    "Cobra justo e entrega em 24 horas",
    "Navega num oceano azul sem concorrência",
  ]
};

export const MODULES = [
  {
    id: 1,
    title: "O Segredo do Lovable",
    description: "Esqueça cursos que enrolam. Você vai aprender a configurar e dominar a I.A. mais potente do mundo para criação web. Do cadastro ao 'Publish'.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Design de Alta Conversão",
    description: "Não adianta ser rápido se for feio. Aprenda os princípios visuais que fazem um site parecer valer R$ 5.000, mesmo que você tenha feito em 30 minutos.",
    icon: Palette,
  },
  {
    id: 3,
    title: "A Máquina de Vendas",
    description: "O ouro do curso. Como encontrar clientes pagadores no Google Maps. O Script de Abordagem Irresistível. Precificação: Quanto cobrar e como receber.",
    icon: DollarSign,
  },
];

export const BONUSES = [
  {
    title: 'Pack de Prompts "Mestre da I.A."',
    description: "Meus melhores comandos prontos. É só copiar e colar para gerar sites de Dentistas, Advogados, Delivery e mais.",
    oldPrice: "R$ 97,00",
    icon: Award
  },
  {
    title: "Contrato de Prestação de Serviços",
    description: "Um modelo de contrato simples e seguro para você usar com seus clientes e parecer ultra profissional.",
    oldPrice: "R$ 150,00",
    icon: FileText
  },
  {
    title: "Aulas de Identidade Visual com I.A.",
    description: "Aprenda a criar logotipos, paletas de cores e identidade visual completa para empresas que não têm.",
    oldPrice: "R$ 197,00",
    icon: Palette
  },
  {
    title: "Comunidade WhatsApp Exclusiva",
    description: "Acesso vitalício à nossa comunidade de alunos. Networking, troca de experiências e suporte.",
    oldPrice: "Inestimável",
    icon: Users
  }
];

export const FAQS = [
  {
    question: "Preciso saber programar?",
    answer: "Não. O curso é focado em usar a I.A. para fazer o trabalho técnico pesado. Você será o diretor criativo, a I.A. será a operária."
  },
  {
    question: "Preciso de um computador potente?",
    answer: "Não. Tudo roda no navegador na nuvem. Qualquer PC ou notebook básico com internet serve perfeitamente."
  },
  {
    question: "Quanto tempo demora para ter resultados?",
    answer: "Depende da sua dedicação. Temos alunos que fecharam o primeiro cliente na primeira semana aplicando o script do Módulo 3."
  },
  {
    question: "Serve para celular?",
    answer: "Você pode assistir às aulas pelo celular, mas para criar os sites e usar a ferramenta Lovable com eficiência, recomendamos um computador ou notebook."
  },
  {
    question: "Qual a diferença entre Standard e Premium?",
    answer: "O Standard tem o curso completo. O Premium adiciona os bônus exclusivos (Pack de Prompts, Contrato, Aulas de Design) e a Comunidade no WhatsApp."
  },
  {
    question: "O suporte é vitalício?",
    answer: "O acesso ao curso é vitalício. O suporte direto é de 30 dias para dúvidas técnicas, mas no Plano Premium você tem a força da comunidade para sempre."
  }
];

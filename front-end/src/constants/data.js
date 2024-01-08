import cliente from "@/pages/cliente";

export const navLinks = [
  {
    texto: "Home",
    link: "/",
  },
  {
    texto: "Destinos",
    link: "/destinos",
  },
  {
    texto: "Promoções",
    link: "/promocoes",
  },
  {
    texto: "Contato",
    link: "/contato",
  },
  {
    texto: "Cadastro",
    link: "/cadastro",
  },
  {
    texto: "Listas",
    link: "/listas",
  },
];

export const destinosLista = [
  {
    imagem: "image/curacao.jpeg",
    nome: "Curaçao",
    texto:
      "Curaçao é uma ilha no Mar do Caribe. É um dos quatro países que formam o Reino dos Países Baixos.",
    valor: "3.221,00",
  },
  {
    imagem: "image/nova-york.jpg",
    nome: "Nova York",
    texto:
      "A cidade de Nova Iorque está localizada no extremo sul do estado de Nova Iorque, no nordeste dos Estados Unidos.",
    valor: "5.581,82",
  },
  {
    imagem: "image/africa.jpeg",
    nome: "África",
    texto:
      "África é o continente localizado ao sul da Europa e sudoeste da Ásia, banhado pelo Oceano Atlântico.",
    valor: "2.673,00",
  },
  {
    imagem: "image/amazonas.jpeg",
    nome: "Amazonas",
    texto: "O estado do Amazonas fica na região Norte do Brasil.",
    valor: "621,00",
  },
  {
    imagem: "image/tulum.jpeg",
    nome: "Tulum",
    texto:
      "Tulum, no México, é um sítio arqueológico com ruínas que datam do Império Maia do ano de 564 d.C.",
    valor: "3.163,98",
  },
  {
    imagem: "image/italia.jpeg",
    nome: "Itália",
    texto:
      "A Itália é um país localizado na Europa Meridional. Sua capital é a cidade de Roma.",
    valor: "5.973,50",
  },
];

export const promocoesLista = [
  {
    imagem: "image/punta-cana.jpg",
    nome: "Punta Cana",
    texto: "Compre 5 dias de viagem pelo valor de 3 dias.",
    valor: "5.500",
  },
  {
    imagem: "image/egito.jpeg",
    nome: "Egito",
    texto: "Compre 7 dias de viagem e ganhe um guia turístico de brinde.",
    valor: "10.000",
  },
  {
    imagem: "image/maldivas.jpg",
    nome: "Maldivas",
    texto: "Compre uma passagem e ganhe 50% de desconto no próxima viagem.",
    valor: "7.789,90",
  },
];

export const tabelas = [
  { nome: "cliente" },
  { nome: "destino" },
  { nome: "compra" },
];

export const banner1 = "/images/backgrounds/banner-1.png";
export const banner2 = "/images/backgrounds/banner-2.png";
export const banner3 = "/images/backgrounds/banner-3.png";

export const logoImage = "/images/assets/futfacil-logo.png";
// Banner Entity

export type bannerType = {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  gradient: string;
};
export const banners: bannerType[] = [
  {
    title: "Reserve sua Arena de Futebol",
    subtitle:
      "A plataforma completa para agendar, gerenciar e jogar nas melhores arenas da sua cidade",
    image: banner1,
    ctaLabel: "Ver Arenas",
    ctaLink: "/arenas",
    gradient: "from-secondary/90 to-secondary/40",
  },
  {
    title: "Copa Verão 2024",
    subtitle:
      "Inscrições abertas! Monte seu time e dispute o maior torneio da temporada com prêmios incríveis",
    image: banner2,
    ctaLabel: "Ver Eventos",
    ctaLink: "/eventos",
    gradient: "from-secondary/90 to-secondary/40",
  },
  {
    title: "Monte seu Time dos Sonhos",
    subtitle:
      "Crie sua equipe, convide jogadores e participe de campeonatos e desafios na plataforma",
    image: banner3,
    ctaLabel: "Criar Equipe",
    ctaLink: "/conta",
    gradient: "from-secondary/90 to-secondary/40",
  },
];

// Arena Entity
export type arenaType = {
  id: string;
  name: string;
  location: string;
  capacity: string;
  image: any;
  pricePerHour: string;
};
export const featuredArenas = [
  {
    id: "1",
    name: "Arena Central",
    location: "Centro, São Paulo",
    capacity: "20 jogadores",
    image: banner1,
    pricePerHour: "R$ 150",
  },
  {
    id: "2",
    name: "Arena Norte",
    location: "Zona Norte, São Paulo",
    capacity: "14 jogadores",
    image: banner2,
    pricePerHour: "R$ 120",
  },
  {
    id: "3",
    name: "Arena Sul Premium",
    location: "Zona Sul, São Paulo",
    capacity: "24 jogadores",
    image: banner3,
    pricePerHour: "R$ 200",
  },
];

// Event Entity

export enum eventTypeEnum {
  copa = "copa",
  campeonato = "campeonato",
  liga = "liga",
  desafio = "desafio",
}
export type eventType = {
  id: string;
  name: string;
  location: string;
  date: string;
  image: string;
  price: string;
  type: eventTypeEnum;
  teamsRegistered: number;
  maxTeams: number;
};
export const featuredEvents = [
  {
    id: "1",
    name: "Copa Verão 2024",
    location: "Arena Central",
    date: "15 Mar 2024",
    image: banner1,
    price: "R$ 200/time",
    type: eventTypeEnum.copa,
    teamsRegistered: 12,
    maxTeams: 16,
  },
  {
    id: "2",
    name: "Liga Semanal",
    location: "Arena Norte",
    date: "Todo Sábado",
    image: banner2,
    price: "R$ 50/time",
    type: eventTypeEnum.liga,
    teamsRegistered: 6,
    maxTeams: 10,
  },
  {
    id: "3",
    name: "Desafio Relâmpago",
    location: "Arena Sul Premium",
    date: "20 Mar 2024",
    image: banner3,
    price: "R$ 80/time",
    type: eventTypeEnum.desafio,
    teamsRegistered: 1,
    maxTeams: 2,
  },
];

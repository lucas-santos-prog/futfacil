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

export type arenasType = {
  id: string;
  name: string;
  address: {
    id: string;
    street: string;
    number: string;
    community: string;
    state: string;
    country: string;
  };
  capacity: string;
  image: string;
  pricePerHour: string;
  emphasisArena: boolean;
};
export const arenas = [
  {
    id: "1",
    name: "Arena Central",
    location: "Centro, São Paulo - SP",
    capacity: "10 jogadores",
    image: banner1,
    pricePerHour: "R$ 150",
    emphasisArena: true,
  },
  {
    id: "2",
    name: "Arena Sports Club",
    location: "Zona Sul, São Paulo - SP",
    capacity: "14 jogadores",
    image: banner2,
    pricePerHour: "R$ 200",
    emphasisArena: false,
  },
  {
    id: "3",
    name: "Arena Prime",
    location: "Zona Oeste, São Paulo - SP",
    capacity: "12 jogadores",
    image: banner3,
    pricePerHour: "R$ 180",
    emphasisArena: false,
  },
  {
    id: "4",
    name: "Arena Champions",
    location: "Zona Norte, São Paulo - SP",
    capacity: "10 jogadores",
    image: banner1,
    pricePerHour: "R$ 160",
    emphasisArena: false,
  },
  {
    id: "5",
    name: "Arena Elite",
    location: "Zona Leste, São Paulo - SP",
    capacity: "16 jogadores",
    image: banner2,
    pricePerHour: "R$ 220",
    emphasisArena: true,
  },
  {
    id: "6",
    name: "Arena Express",
    location: "Centro, São Paulo - SP",
    capacity: "8 jogadores",
    image: banner3,
    pricePerHour: "R$ 120",
    emphasisArena: true,
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

// Teams Entity
export type teamType = {
  id: string;
  name: string;
  city: string;
  members: number;
  image: string;
  category: string;
};
export const featuredTeams = [
  {
    id: "1",
    name: "FC Vikings",
    city: "São Paulo, SP",
    members: 15,
    image: banner1,
    category: "Amador",
  },
  {
    id: "2",
    name: "Real União",
    city: "São Paulo, SP",
    members: 12,
    image: banner2,
    category: "Amador",
  },
  {
    id: "3",
    name: "Atlético Raio",
    city: "Campinas, SP",
    members: 18,
    image: banner3,
    category: "Semi-profissional",
  },
];

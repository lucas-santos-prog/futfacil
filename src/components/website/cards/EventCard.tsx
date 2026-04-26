import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { eventType } from "@/database/data";
import {
  Calendar,
  DollarSign,
  MapPin,
  Swords,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const typeLabels: Record<eventType["type"], string> = {
  copa: "Copa",
  campeonato: "Campeonato",
  liga: "Liga",
  desafio: "Desafio",
};

const typeColors: Record<eventType["type"], string> = {
  copa: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  campeonato: "bg-primary/20 text-primary border-primary/30",
  liga: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  desafio: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function EventCard({
  event,
  compact = false,
}: {
  event: eventType;
  compact?: boolean;
}) {
  const {
    id,
    name,
    image,
    location,
    type,
    date,
    price,
    teamsRegistered,
    maxTeams,
  } = event;
  const spotsLeft = maxTeams - teamsRegistered;
  if (compact) {
    return (
      <Link href={`/eventos/${id}`} className="block">
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
          <div className="flex">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden">
              <Image
                fill
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-3">
              <Badge
                className={`mb-1 w-fit text-[10px] px-1.5 py-0 ${typeColors[type]}`}
              >
                {typeLabels[type]}
              </Badge>
              <h3 className="text-sm font-bold leading-tight">{name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{location}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold text-primary">
                  {price}
                </span>
                {spotsLeft > 0 && (
                  <span className="text-[10px] text-muted-foreground">
                    • {spotsLeft} vagas
                  </span>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-video w-full overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <Badge className={`absolute top-3 left-3 ${typeColors[type]}`}>
          {type === "desafio" ? (
            <Swords className="mr-1 h-3 w-3" />
          ) : (
            <Trophy className="mr-1 h-3 w-3" />
          )}
          {typeLabels[type]}
        </Badge>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{name}</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            {teamsRegistered}/{maxTeams} equipes
            {spotsLeft > 0 && (
              <span className="ml-1 text-primary">({spotsLeft} vagas)</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <DollarSign className="h-4 w-4" />
          <span>{price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/eventos/${id}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

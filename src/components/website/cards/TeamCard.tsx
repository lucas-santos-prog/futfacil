import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface TeamCardProps {
  id: string;
  name: string;
  city: string;
  members: number;
  image: string;
  category: string;
}
export default function TeamCard({
  id,
  name,
  city,
  members,
  image,
  category,
}: TeamCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative w-full overflow-hidden">
        <Image
          fill
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {city}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {members} jogadores
          </span>
        </div>
        <Button className="w-full" asChild>
          <Link href={`/equipes/${id}`}>Ver Equipe</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

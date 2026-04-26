import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface ArenaCardProps {
  id: string;
  name: string;
  location: string;
  capacity: string;
  image: string;
  pricePerHour: string;
}
export default function ArenaCard({
  id,
  name,
  location,
  capacity,
  image,
  pricePerHour,
}: ArenaCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full relative overflow-hidden">
        <Image
          loading="eager"
          fill
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
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
          <Users className="h-4 w-4" />
          <span>{capacity}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Clock className="h-4 w-4" />
          <span>{pricePerHour}/hora</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/arenas/${id}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

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

  capacity: string;
  pricePerHour: string;
}
interface ArenaAddressProps {
  id: string;
  street: string;
  number: string;
  community: string;
  state: string;
  country: string;
}
export default function ArenaCard({
  arena,
  address,
}: {
  arena: ArenaCardProps;
  address: ArenaAddressProps;
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full relative overflow-hidden">
        <Image
          loading="eager"
          fill
          src={"/images/backgrounds/banner-1.png"}
          alt={arena.name}
          className="rounded-t-lg h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{arena.name}</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>
            {address.street}, {address.number} - {address.community} -{" "}
            <span className="uppercase">{address.state}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{arena.capacity}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Clock className="h-4 w-4" />
          <span>{arena.pricePerHour}/hora</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/arenas/${arena.id}`}>Ver Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

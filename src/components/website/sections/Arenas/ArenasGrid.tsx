import ArenaCard from "../../cards/ArenaCard";

interface ArenasGridProps {
  arenas: Array<{
    arena: any;
    address: any;
  }>;
}

export default function ArenasGrid({ arenas }: ArenasGridProps) {
  if (arenas.length === 0) {
    return (
      <div className="col-span-3 flex items-center justify-center py-12 text-center">
        <p className="text-muted-foreground">
          Nenhuma arena encontrada. Tente ajustar seus filtros de pesquisa.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {arenas.map((item) => (
        <ArenaCard
          key={item.arena.id}
          arena={item.arena}
          address={item.address}
        />
      ))}
    </div>
  );
}

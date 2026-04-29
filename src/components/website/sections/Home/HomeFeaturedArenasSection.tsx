import HighLightSection from "./HighLightSection";
import ArenaCard from "../../cards/ArenaCard";

export default async function HomeFeaturedArenasSection() {
  const request = await fetch("http://localhost:3000/api/arenas");
  const data = await request.json();
  const featuredArenas = data.data;

  console.log(featuredArenas);
  return (
    <section className="container mx-auto px-4 py-12">
      <HighLightSection
        title="Arenas em destaque"
        ctaLabel="Ver todas"
        ctaLink="/arenas"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArenas.map(
            (item: any) =>
              item.arena.emphasisArena && (
                <ArenaCard
                  key={item.arena.id}
                  arena={item.arena}
                  address={item.address}
                />
              ),
          )}
        </div>
      </HighLightSection>
    </section>
  );
}

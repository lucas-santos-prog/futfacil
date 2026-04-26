import HighLightSection from "./HighLightSection";
import { featuredArenas } from "@/database/data";
import ArenaCard from "../../cards/ArenaCard";

export default function HomeFeaturedArenasSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <HighLightSection
        title="Arenas em destaque"
        ctaLabel="Ver todas"
        ctaLink="/arenas"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArenas.map((a) => (
            <ArenaCard key={a.id} {...a} />
          ))}
        </div>
      </HighLightSection>
    </section>
  );
}

import HighLightSection from "./HighLightSection";
import { featuredTeams } from "@/database/data";
import TeamCard from "../../cards/TeamCard";

export default function HomeFeaturedTeamsSection() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <HighLightSection
        title="Equipes em destaque"
        ctaLabel="Ver todas"
        ctaLink="/equipes"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTeams.map((t) => (
            <TeamCard key={t.id} {...t} />
          ))}
        </div>
      </HighLightSection>
    </section>
  );
}

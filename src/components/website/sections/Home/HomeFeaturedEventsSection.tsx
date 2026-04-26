import HighLightSection from "./HighLightSection";
import { featuredEvents } from "@/database/data";
import EventCard from "../../cards/EventCard";

export default function HomeFeaturedEventsSection() {
  return (
    <section className="container mx-auto px-4 pb-12">
      <HighLightSection
        title="Eventos em destaque"
        ctaLabel="Ver todos"
        ctaLink="/eventos"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </HighLightSection>
    </section>
  );
}

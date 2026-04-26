import HomeFeaturedArenasSection from "@/components/website/sections/Home/HomeFeaturedArenasSection";
import HomeFeaturedEventsSection from "@/components/website/sections/Home/HomeFeaturedEventsSection";
import HomeHeroSection from "@/components/website/sections/Home/HomeHeroSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturedArenasSection />
      <HomeFeaturedEventsSection />
    </>
  );
}

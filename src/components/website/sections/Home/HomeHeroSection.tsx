"use client";

import { useCallback, useEffect, useState } from "react";
import { banners } from "@/database/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
interface HeroBannerCarouselProps {
  compact?: boolean;
}

interface BannerSlide {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  gradient: string;
}
export default function HomeHeroSection({
  compact = false,
}: HeroBannerCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % banners.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + banners.length) % banners.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = banners[current];
  const height = compact ? "h-48" : "h-[420px] md:h-[500px]";
  return (
    <section className="xl:px-24 container mx-auto px-4 pt-6">
      <div className={`relative overflow-hidden rounded-2xl ${height}`}>
        {banners.map((s, i) => (
          <Image
            fill
            key={i}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className={`absolute inset-0 bg-linear-to-r ${slide.gradient}`} />

        <div className="relative flex h-full flex-col justify-end p-6 md:justify-center md:p-12">
          <div className="max-w-xl space-y-3 md:space-y-4">
            <h1
              className={`font-bold text-primary ${
                compact ? "text-xl" : "text-3xl md:text-5xl"
              }`}
            >
              {slide.title}
            </h1>
            {!compact && (
              <p className="text-base text-primary/90 md:text-xl">
                {slide.subtitle}
              </p>
            )}
            <Button size={compact ? "sm" : "lg"} asChild>
              <Link href={slide.ctaLink}>{slide.ctaLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        {!compact && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-background/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-background/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-primary-foreground"
                  : "w-2 bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

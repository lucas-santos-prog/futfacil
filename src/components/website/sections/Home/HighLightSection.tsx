import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface HighlightSectionProps {
  title: string;
  ctaLabel: string;
  ctaLink: string;
  children: React.ReactNode;
}
export default function HighLightSection({
  title,
  ctaLabel,
  ctaLink,
  children,
}: HighlightSectionProps) {
  return (
    <section className="space-y-6 px-4 xl:px-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <Button variant="ghost" className="gap-1 text-primary" asChild>
          <Link href={ctaLink}>
            {ctaLabel}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      {children}
    </section>
  );
}

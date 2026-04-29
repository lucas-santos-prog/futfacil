import ArenaPageHeader from "@/components/website/sections/Arenas/ArenaPageHeader";
import ArenasSearchBar from "@/components/website/sections/Arenas/ArenasSearchBar";
import ArenasPagination from "@/components/website/sections/Arenas/ArenasPagination";
import ArenasGrid from "@/components/website/sections/Arenas/ArenasGrid";
import { Suspense } from "react";

const ITEMS_PER_PAGE = 6;

async function ArenasContent({
  page,
  search,
}: {
  page: number;
  search: string;
}) {
  try {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    params.set("pageSize", ITEMS_PER_PAGE.toString());
    if (search) {
      params.set("search", search);
    }

    const response = await fetch(
      `http://localhost:3000/api/arenas?${params.toString()}`,
      { cache: "no-store" },
    );
    const data = await response.json();

    if (!data.success) {
      throw new Error("Erro ao buscar arenas");
    }

    const arenas = data.data;
    const totalPages = data.pagination.totalPages;

    return (
      <>
        <ArenasGrid arenas={arenas} />
        <ArenasPagination
          currentPage={page}
          totalPages={totalPages}
          search={search}
        />
      </>
    );
  } catch (error) {
    console.error("Erro ao buscar arenas:", error);
    return (
      <div className="py-12 text-center text-muted-foreground">
        Erro ao carregar as arenas. Tente novamente mais tarde.
      </div>
    );
  }
}

interface ArenasPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function ArenasPage({ searchParams }: ArenasPageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1"));
  const search = params.search || "";

  return (
    <section className="px-4 xl:px-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ArenaPageHeader />

        <ArenasSearchBar />

        <Suspense
          fallback={
            <div className="py-12 text-center text-muted-foreground">
              Carregando arenas...
            </div>
          }
        >
          <ArenasContent page={page} search={search} />
        </Suspense>
      </div>
    </section>
  );
}

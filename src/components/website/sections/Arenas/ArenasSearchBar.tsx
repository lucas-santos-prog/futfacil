"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArenasSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || "",
  );

  // Sync local state with URL params when component mounts or URL changes
  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (currentSearch !== searchValue) {
      setSearchValue(currentSearch);
    }
  }, [searchParams, searchValue]);

  // Debounced search update
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";
      if (searchValue !== currentSearch) {
        const params = new URLSearchParams(searchParams);
        if (searchValue) {
          params.set("search", searchValue);
        } else {
          params.delete("search");
        }
        params.set("page", "1"); // Reset to first page when searching
        router.push(`?${params.toString()}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, router]); // Removed searchParams from dependencies

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome ou localização..."
          className="pl-10"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <Button variant="outline" className="gap-2">
        <Filter className="h-4 w-4" />
        Filtros
      </Button>
    </div>
  );
}

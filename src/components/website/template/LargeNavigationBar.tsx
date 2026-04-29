"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./Header";

export default function LargeNavigationBar() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map(({ to, label, icon: Icon }) => (
        <Button
          key={to}
          variant={isActive(to) ? "secondary" : "ghost"}
          className="p-5"
          size="sm"
          asChild
        >
          <Link href={to} className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}

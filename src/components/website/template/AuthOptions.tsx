import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogInIcon, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AuthOptions() {
  return (
    <>
      <DropdownMenuItem asChild>
        <Link href="/entrar">
          <LogInIcon className="mr-2 h-4 w-4" />
          Entrar em minha conta
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/criar-conta">
          <Plus className="mr-2 h-4 w-4" />
          criar conta
        </Link>
      </DropdownMenuItem>
    </>
  );
}

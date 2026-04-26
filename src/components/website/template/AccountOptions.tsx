import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";
import LogOutButton from "../buttons/LogOutButton";

export default function AccountOptions() {
  return (
    <>
      <DropdownMenuItem asChild>
        <Link href="/conta">
          <User className="mr-2 h-4 w-4" />
          Minha conta
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <LogOutButton />
      </DropdownMenuItem>
    </>
  );
}

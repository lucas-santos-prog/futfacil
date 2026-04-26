"use client";
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";
import AccountOptions from "../template/AccountOptions";
import AuthOptions from "../template/AuthOptions";

const AccountOptionsButton = () => (
  <Button variant="ghost" size="icon">
    <User className="h-5 w-5" />
  </Button>
);

const AuthOptionsButton = () => (
  <Button variant="ghost" size="icon">
    <LogIn className="h-5 w-5" />
  </Button>
);

export default function HeaderSessionDropdown() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Button variant="ghost" size="icon" disabled />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {session ? (
            <User className="h-5 w-5" />
          ) : (
            <LogIn className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {session ? <AccountOptions /> : <AuthOptions />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

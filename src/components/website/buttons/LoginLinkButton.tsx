import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginLinkButton() {
  return (
    <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
      <Link href="/login">Entrar</Link>
    </Button>
  );
}

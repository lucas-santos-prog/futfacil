import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpLinkButton() {
  return (
    <Button size="sm" className="hidden sm:inline-flex" asChild>
      <Link href="/signup">Criar conta</Link>
    </Button>
  );
}

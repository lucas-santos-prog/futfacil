import { logoImage } from "@/database/data";
import Link from "next/link";

export default function LogoLinkButton() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src={logoImage} alt="Fut Fácil" className="h-9 w-auto" />
    </Link>
  );
}

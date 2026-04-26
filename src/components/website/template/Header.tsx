import { Users, Home, Trophy, MapPin } from "lucide-react";

import LogoLinkButton from "../buttons/LogoLinkButton";
import HeaderSessionDropdown from "../dropdowns/HeaderSessionDropdown";
import LargeNavigationBar from "./LargeNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
export const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/arenas", label: "Arenas", icon: MapPin },
  { to: "/eventos", label: "Eventos", icon: Trophy },
  { to: "/equipes", label: "Equipes", icon: Users },
];
export default async function Header() {
  return (
    <header className="px-4 lg:px-24 sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <LogoLinkButton />

          {/* LargeNavigationBar */}
          <LargeNavigationBar />

          <div className="flex items-center gap-2">
            <MobileNavigationBar />
            {/* Account Dropdown Options */}
            <HeaderSessionDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

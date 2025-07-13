"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background shadow z-50 px-6 py-4 flex justify-between items-center">
      <div className="flex gap-6">
        <Link href="/">
          <Button variant={pathname === "/" ? "default" : "ghost"}>Inicio</Button>
        </Link>
        <Link href="/about">
          <Button variant={pathname === "/about" ? "default" : "ghost"}>Sobre mí</Button>
        </Link>
        <Link href="/projects">
          <Button variant={pathname === "/projects" ? "default" : "ghost"}>Proyectos</Button>
        </Link>
        <Link href="/skills">
          <Button variant={pathname === "/skills" ? "default" : "ghost"}>Habilidades</Button>
        </Link>
        <Link href="/contact">
          <Button variant={pathname === "/contact" ? "default" : "ghost"}>Contacto</Button>
        </Link>
        <Link href="/extra">
          <Button variant={pathname === "/extra" ? "default" : "ghost"}>Extra</Button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">🌞</span>
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        />
        <span className="text-sm">🌙</span>
      </div>
    </nav>
  );
}
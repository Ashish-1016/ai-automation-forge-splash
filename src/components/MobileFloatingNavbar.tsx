import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/components/Navbar.tsx";

export function MobileFloatingNavbar() {

  const links = navItems.map((item, i) => ({
    ...item,
    title: item.label,
    icon: <item.icon />,
    href: `#${item.id}`,
  }))


  return (
      <FloatingDock items={links}/>
  );
}

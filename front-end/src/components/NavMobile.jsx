import { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";

const routes = [
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Visuals",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Say hello",
    href: "#",
  },
];

export function NavMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      size={24}
      distance="sm"
      label="Show menu"
    />
  );
}

import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";
import { Link } from "react-router-dom";
import { Slant as Hamburger } from "hamburger-react";
import { useState } from "react";

export function Header({ onToggleMenu }) {
  const [isOpen, setOpen] = useState(false);

  function handleToggle(toggled) {
    if (toggled) {
      onToggleMenu(toggled);
    } else {
      onToggleMenu(toggled);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-[100] grid grid-cols-3 items-center p-8 mix-blend-difference">
        <Logo src={wordmark} type="wordmark" />
        <div className="justify-self-center">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={handleToggle}
            size={24}
            distance="sm"
            label="Show menu"
            color="#ffffff"
          />
        </div>
        <Link className="text-text-primary-inverted justify-self-end">
          Get in touch
        </Link>
      </header>
    </>
  );
}

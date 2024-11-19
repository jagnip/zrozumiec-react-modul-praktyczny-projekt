import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";
import { Link } from "react-router-dom";
import { NavMenuToggle } from "./NavMenuToggle";

export function Header( { isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <header className="p-page-margin sticky top-0 z-[100] grid grid-cols-3 items-center mix-blend-difference">
        <Logo src={wordmark} type="wordmark" />
        <div className="justify-self-center">
          <NavMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <Link className="text-text-primary-inverted justify-self-end">
          Get in touch
        </Link>
      </header>
    </>
  );
}

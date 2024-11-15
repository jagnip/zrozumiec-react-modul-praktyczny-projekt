import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="flex justify-between">
        <Logo src={wordmark} type="wordmark" />
        {/* Toggle button */}
        <Link>Get in touch</Link>
        {/* <NavDesktop/>
        <NavMobile/> */}
      </header>
    </>
  );
}

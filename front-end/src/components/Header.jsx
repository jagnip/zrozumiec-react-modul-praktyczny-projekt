import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";


export function Header() {
  return (
    <>
      <header className="flex justify-between">
        <Logo src={wordmark} type="wordmark" />
        <NavDesktop/>
        <NavMobile/>
      </header>
    </>
  );
}

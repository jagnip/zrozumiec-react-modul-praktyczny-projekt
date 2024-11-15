import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";
import { NavMenu } from "./NavDesktop";


export function Header() {
  return (
    <>
      <header className="flex justify-between">
        <Logo src={wordmark} type="wordmark" />
        <NavMenu/>
      </header>
    </>
  );
}

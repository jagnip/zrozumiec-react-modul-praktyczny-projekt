import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";

export function Header() {
  return (
    <>
      <header>
        <Logo src={wordmark} type="wordmark" />
      </header>
    </>
  );
}

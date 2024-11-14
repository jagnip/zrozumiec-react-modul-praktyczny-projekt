import { Logo } from "./Logo";
import wordmark from "../assets/svg/logo-wordmark.svg";

export function Header() {
  return (
    <>
      <header>
        <Logo src={wordmark} type="wordmark" />

        <div class="flex flex-col items-end gap-[3px]">
          <span class="h-1 w-8 bg-black"></span>
          <span class="h-1 w-[22px] bg-black"></span>
        </div>
      </header>
    </>
  );
}

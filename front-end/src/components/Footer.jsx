import { Logo } from "./Logo";
import linkedinIcon from "../assets/svg/linkedin-icon.svg";

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 pt-2">
      <Logo />
      <p className="flex flex-col">
        <a
          href="tel:+447898005228"
          className="leading-h5 lg:leading-h4 text-lg font-medium no-underline lg:text-xl"
        >
          +44 7898 005 228
        </a>
        <a
          href="mailto:jagoda@design.co"
          className="leading-h5 lg:leading-h4 text-lg font-medium no-underline lg:text-xl"
        >
          jagoda@design.co
        </a>
      </p>
      <p>London | Lisbon</p>

      <img src={linkedinIcon} className="w-6 pt-2" alt="Linked-in icon" />
      <p className="pt-5 text-xs text-[#575757]">
        No cookies, just{" "}
        <a
          className="text-xs text-[#575757]"
          href="https://usefathom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy focused analytics.
        </a>
      </p>
    </footer>
  );
}

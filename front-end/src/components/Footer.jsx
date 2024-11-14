import { Logo } from "./Logo";
import linkedinIcon from "../assets/svg/linkedin-icon.svg";
import symbol from "../assets/svg/logo-symbol.svg";

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 pt-2">
      {/* Logo */}
      <Logo src={symbol} type="symbol" />

      {/* Contact Links */}
      <div className="flex flex-col">
        <a
          href="tel:+447898005228"
          className="leading-h5 lg:leading-h4 text-lg font-medium no-underline lg:text-xl"
          aria-label="Call us"
        >
          +44 7898 005 228
        </a>
        <a
          href="mailto:jagoda@design.co"
          className="leading-h5 lg:leading-h4 text-lg font-medium no-underline lg:text-xl"
          aria-label="Email us"
        >
          jagoda@design.co
        </a>
      </div>

      {/* Location Info */}
      <p>London | Lisbon</p>

      {/* Social Media Icon */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="pt-2"
      >
        <img src={linkedinIcon} className="w-6" alt="LinkedIn profile icon" />
      </a>

      {/* Footer Privacy Notice */}
      <p className="pt-5 text-xs text-[#575757]">
        No cookies, just{" "}
        <a
          href="https://usefathom.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-5 text-xs text-[#575757]"
          aria-label="Fathom privacy-focused analytics"
        >
          privacy-focused analytics.
        </a>
      </p>
    </footer>
  );
}

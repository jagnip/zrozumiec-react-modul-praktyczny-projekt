import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col gap-6">


<Logo/>


      <p className="flex flex-col">
        <a href="tel:+447898005228" className="leading-h5 text-lg font-medium">
          +44 7898 005 228
        </a>
        <a
          href="mailto:jagoda@design.co"
          className="leading-h5 text-lg font-medium"
        >
          jagoda@design.co
        </a>
      </p>
      <p>London | Lisbon</p>
    </footer>
  );
}

import { motion } from "framer-motion";
import { easings } from "../utils/animations";

const routes = [
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Visuals",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Say hello",
    href: "#",
  },
];

export function NavMenu() {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{
        y: "0",
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
      className="bg-bg-secondary absolute z-50 flex h-screen w-screen flex-col justify-end p-8"
    ></motion.nav>
  );
}

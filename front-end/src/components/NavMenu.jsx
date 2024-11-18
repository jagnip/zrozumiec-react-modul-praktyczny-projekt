import { motion } from "framer-motion";
import { easings } from "../utils/animations";
import { NavMenuItem } from "./NavMenuItem";

const navItems = [
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
      className="bg-bg-secondary absolute z-50 flex h-screen w-screen flex-col justify-center p-8"
    >
      <ul>
        {navItems.map((item, idx) => (
          <NavMenuItem key={idx} index={idx + 1} title={item.title} />
        ))}
      </ul>
    </motion.nav>
  );
}

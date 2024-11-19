import { path } from "framer-motion/client";

export function NavMenuToggle() {
  const path1Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 8.5L24 8.5" },
  };

  const path2Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    closed: { d: "M0 15.5L24 15.5" },
  };

  return (
    <div className="justify-self-center flex flex-vcol gap-2 cursor-pointer stroke-stroke-primary-inverted stroke-2">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path {...path1Variants.closed} />
        <path {...path2Variants.closed} />
      </svg>
    </div>
  );
}

import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
export function NavMenuToggle({ isMenuOpen, setIsMenuOpen }) {
  const path1Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 8.5L24 8.5" },
  };

  const path2Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    closed: { d: "M0 15.5L24 15.5" },
  };

  const path1Controls = useAnimation();
  const path2Controls = useAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      path1Controls.start(path1Variants.open);
      path2Controls.start(path2Variants.open);
    } else {
      path1Controls.start(path1Variants.closed);
      path2Controls.start(path2Variants.closed);
    }
  }, [isMenuOpen]);

  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-1 flex-vcol stroke-stroke-primary-inverted flex cursor-pointer gap-2 justify-self-center"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="3">
        <motion.path
          {...path1Variants.closed}
          animate={path1Controls}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          {...path2Variants.closed}
          animate={path2Controls}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </div>
  );
}

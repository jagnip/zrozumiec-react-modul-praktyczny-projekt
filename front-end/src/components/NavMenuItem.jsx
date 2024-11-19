import arrow from "../assets/svg/arrow.svg";
import { motion } from "framer-motion";
import {
  dividerMotion,
  arrowMotion,
  itemContentMotion,
  itemCoverMotion,
} from "../utils/animations";
import { useState } from "react";

export function NavMenuItem({ index, title }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.li
      className={`text-text-primary-inverted relative w-full cursor-pointer py-4 ${
        isLoading ? "pointer-events-none" : "pointer-events-auto"
      }`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="relative flex w-full items-center">
        <motion.div
          variants={itemCoverMotion}
          className="bg-bg-primary-inverted absolute inset-0"
        />
        <motion.span variants={itemContentMotion} className="w-[4ch]">
          {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </motion.span>
        <h3 className="text-text-primary-inverted flex-1">{title}</h3>
        <div>
          <motion.div variants={arrowMotion}>
            <img src={arrow} alt="Arrow" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="bg-bg-primary absolute bottom-0 h-[2px] w-full origin-left"
        variants={dividerMotion}
      />
    </motion.li>
  );
}

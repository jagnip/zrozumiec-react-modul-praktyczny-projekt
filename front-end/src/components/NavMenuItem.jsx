import arrow from "../assets/svg/arrow.svg";
import { motion } from "framer-motion";
import { dividerMotion } from "../utils/animations";

export function NavMenuItem({ index, title }) {
  return (
    <motion.li
      className="text-text-primary-inverted relative w-full cursor-pointer py-4"
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative flex w-full items-center">
        <div className="bg-bg-primary-inverted absolute inset-0 hidden" />
        <span className="w-[4ch]">
          {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </span>
        <h3 className="text-text-primary-inverted flex-1">{title}</h3>
        <div>
          <div>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <motion.div
        className="bg-bg-primary absolute bottom-0 h-[2px] w-full origin-left"
        variants={dividerMotion}
      />
    </motion.li>
  );
}

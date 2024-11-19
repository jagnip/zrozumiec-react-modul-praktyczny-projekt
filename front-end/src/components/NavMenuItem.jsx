import arrow from "../assets/svg/arrow.svg";
import { motion } from "framer-motion";
import {
  dividerMotion,
  arrowMotion,
  itemContentMotion,
} from "../utils/animations";

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

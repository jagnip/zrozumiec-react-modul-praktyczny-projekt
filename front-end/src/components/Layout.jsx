import { easings } from "../utils/animations";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";

export function Layout() {
  return (
    <>
      <section className="relative flex h-screen flex-col">
        <Header />
        {/* Landing page content */}
        <motion.div
          initial="initial"
          animate="animate"
          className="mx-auto flex flex-1 flex-col"
        >
          <motion.h1 className="md:pl-[10%]">We design</motion.h1>
          <div className="bg-bg-primary z-10 flex items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { duration: 0.8, ease: easings.easeInOutQuint },
              }}
              className="bg-bg-primary-inverted mr-8 hidden h-1 flex-1 origin-left md:block"
            />
            <motion.h1 className="z-20">Good enough</motion.h1>
          </div>
          <div className="bg-bg-primary z-20">
            <motion.h1>Digital products</motion.h1>
          </div>
          <div className="bg-bg-primary z-30 w-full flex-1 pt-8 md:pl-[20%]">
            <motion.p className="max-w-lg">
              Good Enough Studio® is a design studio focused on digital
              products that works with companies around the world, helping them
              grow and expand their business.
            </motion.p>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

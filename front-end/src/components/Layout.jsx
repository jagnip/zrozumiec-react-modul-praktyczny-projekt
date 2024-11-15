import { easings, textRevealMotion } from "../utils/animations";
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
          <div>
            <motion.h1 variants={textRevealMotion(0)} className="md:pl-[10%]">
              Beautifully
            </motion.h1>
            <div className="bg-bg-primary z-10 flex items-center">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { duration: 0.8, ease: easings.easeInOutQuint },
                }}
                className="bg-bg-primary-inverted mr-8 hidden h-1 flex-1 origin-left md:block"
              />
              <motion.h1 variants={textRevealMotion(0.2)} className="z-20">
                designed & coded
              </motion.h1>
            </div>
            <div className="bg-bg-primary z-20">
              <motion.h1 variants={textRevealMotion(0.4)}>
                digital products
              </motion.h1>
            </div>
          </div>
          <div className="bg-bg-primary z-30 w-full flex-1 pt-8 md:pl-[20%]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  ease: easings.easeInOutQuint,
                },
              }}
              className="max-w-lg"
            >
              Blue Berry® is a design studio focused on digital
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

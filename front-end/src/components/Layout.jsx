import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <section className="relative flex h-screen flex-col">
        <Header />
        {/* Landing page content */}
        <div className="mx-auto flex flex-1 flex-col">
          <h1 className="md:pl-[10%]">We design</h1>
          <div className="flex items-center z-10 bg-bg-primary">
            <div className="bg-bg-primary-inverted h-1 flex-1 mr-8 hidden md:block origin-left"/>
            <h1 className="z-20">Good enough</h1>
          </div>
          <div className="bg-bg-primary z-20">
            <h1>Digital products</h1>
          </div>
          <div className="bg-bg-primary z-30 flex-1 w-full pt-8 md:pl-[20%]">
            <p className="max-w-lg">
              Good Enough Studio® is a design studio focused on digital
              products that works with companies around the world, helping them
              grow and expand their business.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

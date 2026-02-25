import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
// import womenImg from "../assets/women.jpg";
// import menImg from "../assets/men.jpg";
import menImg from "../assets/men.png"
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-hero min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center relative">

          {/* LEFT CONTENT */}
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block border border-yellow-400 dark:border-yellow-500 text-xs tracking-widest px-4 py-2 mb-6 dark:text-yellow-400"
            >
              SUMMER IS HERE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-800 dark:text-white mt-6"
            >
              YOUR <br /> VIBE <br /> STARTS HERE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-gray-600 dark:text-gray-400 max-w-md"
            >
              Explore our latest summer styles and refresh your everyday wardrobe today.
            </motion.p>

            <Link to="/collection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 bg-yellow-400 dark:bg-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold transition"
              >
                Collections
              </motion.button>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center mt-12 md:mt-0">
            <motion.img
              src={heroImg}
              alt="Fashion Model"
              initial={{ opacity: 0, scale: 0.85, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[520px] object-contain"
            />

            {/* SALE BADGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-0 md:right-12 w-28 h-28 rounded-full border-4 border-yellow-400 flex flex-col items-center justify-center bg-white dark:bg-gray-800"
            >
              <span className="text-2xl font-bold text-yellow-500">25%</span>
              <span className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                Off Sale
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOP COLLECTIONS SECTION */}
      <section className="bg-white dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white leading-tight">
              Our Top <br /> Collections
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-sm">
              Explore our newest arrivals from the most-loved Loungewear range.
            </p>

            <Link to="/collection">
              <button className="mt-8 px-7 py-3 border border-gray-900 dark:border-gray-300 text-gray-900 dark:text-white rounded-full text-sm tracking-widest hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white transition">
                SHOP NOW
              </button>
            </Link>
          </motion.div>

          {/* MEN CARD */}
          <Link to="/collection/men" className="group">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#f3efea] dark:bg-gray-700 p-6 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={menImg}
                alt="Men Collection"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900 dark:text-white">Men</span>
                <span className="text-xl group-hover:translate-x-2 transition">
                  ↗
                </span>
              </div>
            </motion.div>
          </Link>

        </div>
      </section>
    </>
  );
}
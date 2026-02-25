import React, { useState } from "react";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Collection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="text-gray-600 dark:text-gray-400 body-font bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="flex w-full mb-12 items-start gap-8 flex-wrap lg:flex-nowrap"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:w-1/3 w-full flex-shrink-0">
            <motion.h1
              className="sm:text-5xl md:text-6xl text-3xl font-bold title-font text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Premium Fashion Collection 2026
            </motion.h1>
          </div>

          <motion.p
            className="lg:w-2/3 w-full leading-relaxed text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our curated selection of high-quality apparel designed for comfort and style. 
            From classic basics to premium hoodies, each piece is crafted with attention to detail. 
            Elevate your wardrobe with our exclusive collection of tees, shirts, and jackets that 
            blend versatility with contemporary fashion trends.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap -m-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              variants={itemVariants}
              layout
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProductCard product={p} onSelect={setSelectedProduct} />
            </motion.div>
          ))}
        </motion.div>

        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      </div>
    </section>
  );
};

export default Collection;

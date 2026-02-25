import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ product, onSelect }) => {
	const images = product.images && product.images.length ? product.images : [product.image];
	const [index, setIndex] = useState(0);
	const intervalRef = useRef(null);
	const hovering = useRef(false);

	useEffect(() => {
		return () => clearInterval(intervalRef.current);
	}, []);

	const startCycle = () => {
		if (images.length <= 1) return;
		hovering.current = true;
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setIndex((i) => (i + 1) % images.length);
		}, 1200);
	};

	const stopCycle = () => {
		hovering.current = false;
		clearInterval(intervalRef.current);
		setIndex(0);
	};

	return (
		<div className="p-2">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition group"
        onClick={() => onSelect(product)}
        onMouseEnter={startCycle}
        onMouseLeave={stopCycle}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={product.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover object-top"
            />
          </AnimatePresence>

          {/* Image indicators with visible pill background for contrast */}
          {images.length > 1 && (
            <motion.div
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-3 py-1 rounded-full bg-white/70 dark:bg-black/40 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-full transition-all ${
                      i === index
                        ? "bg-gray-800 dark:bg-white w-6 h-2 rounded-full"
                        : "bg-gray-300 dark:bg-white/50 w-2 h-2"
                    }`}
                    initial={false}
                    animate={{
                      scale: i === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.18 }}
                    aria-hidden={i === index ? "false" : "true"}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {product.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">₹{product.price}</p>
        </div>
      </motion.div>
      </div>
    );
};

export default ProductCard;

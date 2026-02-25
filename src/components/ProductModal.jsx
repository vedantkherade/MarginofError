import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[80vh]"
        >
          <motion.div
            className="w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={product.image}
              alt={product.name || "product"}
              className="w-full max-h-80 object-contain"
            />
          </motion.div>

          <motion.div
            className="p-6 overflow-y-auto max-h-[48vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {product.name}
            </h3>

            {product.description && (
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{product.description}</p>
            )}

            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Price: </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{product.price}</span>
            </div>

            {Array.isArray(product.tech) && product.tech.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Features</p>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition font-semibold"
              >
                Close
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
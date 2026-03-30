"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-dark-muted rounded-full flex items-start justify-center p-2"
      >
        <motion.div className="w-1 h-2 bg-lightning-500 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

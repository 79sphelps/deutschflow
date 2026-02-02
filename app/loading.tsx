"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-gray-400"
    >
      Loading…
    </motion.div>
  );
}

/* Old w/out Framer Motion */
// <div className="flex items-center justify-center min-h-[60vh]">
//   <div className="text-gray-500 text-sm animate-pulse">
//     Loading…
//   </div>
// </div>
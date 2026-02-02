"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/berlin.jpg"
          alt="Berlin"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <h1 className="font-bold mb-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
          Learn German the <span className="text-blue-600">modern</span> way
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Interactive lessons, smart practice, real progress.
        </p>

        <Link
          href="/learn"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Start Learning →
        </Link>
      </motion.div>
    </section>
  );
}

/* Old Static */
// export default function HomePage() {
//   return (
//     <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
//       <h1 className="text-4xl font-bold text-center">Learn German the Practical Way 🇩🇪</h1>
//       <p className="text-lg text-gray-600 max-w-2xl text-left">
//         Structured lessons, real-world vocabulary, and interactive practice to
//         help you build confidence fast.
//       </p>
//       <p className="text-lg text-gray-600 max-w-2xl text-left">
//         A modern German learning experience focused on clarity, progress,
//         and real-world usage.
//       </p>
//     </section>
//   );
// }

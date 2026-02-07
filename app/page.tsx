"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Headings from "@/components/ui/Headings";


export default function HomePage() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/berlin.jpg"
          alt="Berlin city skyline"
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
        <Headings>
          Learn German the <span className="text-blue-600">modern</span> way
        </Headings>
        <p className="text-gray-700 text-lg mb-8">
          Interactive lessons, smart practice, real progress.
        </p>
        <div className="flex flex-row justify-center items-center">
          <button className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all active:scale-[0.98]">
            <Link href={`/learn`}>Start Learning →</Link>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

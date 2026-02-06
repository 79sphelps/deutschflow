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

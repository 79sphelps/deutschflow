"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lesson } from "@/lib/data/lessons";

export default function LessonCard({
  lesson,
  collection,
}: {
  lesson: Lesson;
  collection: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <Link href={`/${collection}/${lesson.lessonId}`} className="block p-6">
        <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 text-sm">{lesson.description}</p>
      </Link>
    </motion.div>
  );
}

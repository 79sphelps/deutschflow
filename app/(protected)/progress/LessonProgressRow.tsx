import Link from "next/link";
import { Lesson } from "@/types/lessons";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";
import { ProgressRing } from "@/components/ProgressRing";

type LessonProgress = {
  completed: boolean;
  score: number;
  attempts: number;
  lastAttemptAt?: string;
};

export default function LessonProgressRow({
  lesson,
  progress,
}: {
  lesson: Lesson;
  progress?: LessonProgress;
}) {
  const completed = progress?.completed ?? false;
  const score = progress?.score ?? 0;
  const attempts = progress?.attempts ?? 0;

  return (
    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        {completed ? (
          <CheckCircle className="text-green-600" />
        ) : (
          <Circle className="text-gray-400" />
        )}
        <div>
          <p className="font-medium">{lesson.title}</p>
          <p className="text-sm text-gray-500">
            {completed
              ? `Completed · Score ${score}% · ${attempts} attempt${attempts === 1 ? "" : "s"}`
              : attempts > 0
                ? `In progress · Best score ${score}%`
                : "Not started"}
          </p>
        </div>
        <div className="hidden sm:block">s
          <ProgressRing value={progress?.score ?? 0} />
        </div>
        <div role="progressbar"
          aria-valuenow={score}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className="sr-only">
            {score}% completed
          </span>
        </div>
      </div>

      <Link
        href={`/learn/${lesson.lessonId}`}
        className="flex items-center gap-1 text-blue-600 hover:underline"
      >
        Continue <ArrowRight size={16} />
      </Link>
    </div>
  );
}

"use client";

import { useLessonProgress } from "@/hooks/useLessonProgress";
import { useState } from "react";
import { Exercise, Exercises } from "@/types/exercises";
import PageWrapper from "@/app/PageWrapper";
import useSound from "use-sound";
import confetti from "canvas-confetti";

export function fireConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// const correctSound = "/sounds/correct.mp3";
const wrongSound = "/sounds/wrong.mp3";
const completeSound = "/sounds/complete.mp3";

type AnswerMap = {
  [exerciseIndex: number]: string;
};

export default function PracticeClient({
  lessonId,
  exercise,
}: {
  lessonId: string;
  exercise: Exercise;
}) {
  const exercises: Exercises[] = exercise.exercises;
  const { saveProgress, loading } = useLessonProgress(lessonId);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  // const [playCorrect] = useSound(correctSound, { volume: 0.4 });
  const [playWrong] = useSound(wrongSound, { volume: 0.4 });
  const [playComplete] = useSound(completeSound, { volume: 0.5 });

  if (loading) {
    return <p className="p-6">Loading progress…</p>;
  }

  function handleSubmit() {
    let correct = 0;

    exercises.forEach((ex, idx) => {
      if (answers[idx]?.trim() === ex.answer) {
        correct++;
      }
    });

    const calculatedScore = Math.round((correct / exercises.length) * 100);

    if (calculatedScore >= 70) {
      fireConfetti();
      playComplete();
    } else {
      playWrong();
    }

    setScore(calculatedScore);
    saveProgress(calculatedScore);
    setSubmitted(true);
  }

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
          Practice
        </h1>

        {exercises.map((ex, idx) => (
          <fieldset className="space-y-2" key={idx}>
            <legend className="font-medium">{ex.question}</legend>

            <div className="mb-6">
              <p className="font-medium mb-2">
                {idx + 1}. {ex.question}
              </p>

              {/* Multiple choice */}
              {ex.options ? (
                <div className="space-y-1">
                  {ex.options.map((opt, optIdx) => (
                    // <label key={optIdx} className="block cursor-pointer">
                    <label key={optIdx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`question-${idx}`} // unique per question
                        value={opt}
                        checked={answers[idx] === opt}
                        onChange={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [idx]: opt,
                          }))
                        }
                        // className="mr-2"
                        className="accent-blue-600 mr-2"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ) : (
                /* Fill in */
                <input
                  className="border p-2 w-full mt-2"
                  value={answers[idx] ?? ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [idx]: e.target.value,
                    }))
                  }
                />
              )}

              {/* Feedback */}
              {submitted && (
                <p
                  className={`mt-1 ${
                    answers[idx]?.trim() === ex.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {answers[idx]?.trim() === ex.answer
                    ? "Correct"
                    : `Correct answer: ${ex.answer}`}
                </p>
              )}
            </div>
          </fieldset>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded min-h-[44px] min-w-[44px] w-full"
          >
            Submit
          </button>
        ) : (
          <>
            <p className="mt-4 font-bold text-lg">Score: {score}%</p>
            <p className="mt-2 text-green-600">Lesson completed ✔</p>
          </>
        )}
      </div>
    </PageWrapper>
  );
}

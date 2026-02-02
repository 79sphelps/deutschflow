"use client";

import { useState } from "react";
import { exercises } from "@/lib/data/exercises";

export default function Exercise() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const exercise = exercises[index];

  function checkAnswer() {
    if (answer.toLowerCase().trim() === exercise.answer) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Try again");
    }
  }

  function next() {
    setAnswer("");
    setResult(null);
    setIndex((prev) => (prev + 1) % exercises.length);
  }

  return (
    <div>
      <h3>{exercise.prompt}</h3>
      <p>
        <strong>{exercise.question}</strong>
      </p>

      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer"
      />
      <button
        className="min-h-[44px] min-w-[44px]"
        aria-label="Check Answer"
        onClick={checkAnswer}
      >
        Check
      </button>

      {result && (
        <>
          <p>{result}</p>
          <button
            className="min-h-[44px] min-w-[44px]"
            aria-label="Next Exercise"
            onClick={next}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

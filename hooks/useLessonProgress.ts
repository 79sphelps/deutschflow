"use client";

import { useEffect, useState } from "react";

type Progress = {
  lessonId: string;
  completed: boolean;
  score: number;
  started: boolean;
};

const STORAGE_KEY = "lesson-progress";

export function useLessonProgress(lessonId: string) {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);

  // Load progress
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/progress/${lessonId}`);
        if (res.ok) {
          setProgress(await res.json());
          return;
        }
      } catch {}

      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      setProgress(parsed[lessonId] ?? null);
    }

    load().finally(() => setLoading(false));
  }, [lessonId]);

  async function persist(payload: Progress) {
    setProgress(payload);

    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    data[lessonId] = payload;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  function markLessonStarted() {
    persist({
      lessonId,
      started: true,
      completed: false,
      score: 0,
    });
  }

  function saveProgress(score: number, completed = true) {
    persist({
      lessonId,
      started: true,
      completed,
      score,
    });
  }

  return {
    progress,
    loading,
    markLessonStarted,
    saveProgress,
    isCompleted: progress?.completed ?? false,
    isStarted: progress?.started ?? false,
  };
}

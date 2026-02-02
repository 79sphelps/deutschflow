export type ProgressState = {
  completedLessons: string[];
};

const STORAGE_KEY = "german-learning-progress";

export function getProgress(): ProgressState {
  if (typeof window === "undefined") {
    return { completedLessons: [] };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { completedLessons: [] };
  } catch {
    return { completedLessons: [] };
  }
}

export function saveProgress(progress: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId: string) {
  const progress = getProgress();

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
}

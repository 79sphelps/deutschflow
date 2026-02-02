export type LessonProgress = {
  lessonId: string;
  completed: boolean;
  score: number;
  attempts: number;
  lastAttemptAt?: string;
};
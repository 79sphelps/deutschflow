import { getBaseUrl } from "./getBaseUrl";
import { LessonProgress } from "@/types/progress";
import { Lesson } from "@/types/lessons";
import { Exercise } from "@/types/exercises";
import { Grammar } from "@/types/grammar";
import { ApiResponse } from "@/types/api";
import { Vocabulary } from "@/types/vocabulary";
import { Progress } from "@/hooks/useLessonProgress";

export async function getUserProgress(): Promise<LessonProgress[]> {
  const res = await fetch("/api/progress", {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch progress");
  }

  const json: ApiResponse<LessonProgress[]> = await res.json();
  return json.data;
}

export async function getLessons() {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/lessons`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Lesson[]> = await res.json();
  return json.data;
}

export async function getLesson(id: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/lesson/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }
  // return res.json();
  const json: ApiResponse<Lesson> = await res.json();
  return json.data;
}

export async function getExercises(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/exercises/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Exercise[]> = await res.json();
  return json.data;
}

export async function getGrammar(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/grammar/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Grammar[]> = await res.json();
  return json.data;
}

export async function getVocabulary(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/vocabulary/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Vocabulary> = await res.json();
  return json.data;
}

export async function getAllVocabulary() {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/vocabulary`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Vocabulary[]> = await res.json();
  return json.data;
}

export async function getProgress(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/progress/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  // return res.json();
  const json: ApiResponse<Progress> = await res.json();
  return json.data;
}

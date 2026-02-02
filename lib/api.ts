import { getBaseUrl } from "./getBaseUrl";

export async function getLessons() {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/lessons`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

export async function getLesson(id: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/lesson/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }
  return res.json();
}

export async function getExercises(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/exercises/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

export async function getGrammar(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/grammar/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

export async function getVocabulary(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/vocabulary/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

export async function getAllVocabulary() {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/vocabulary`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

export async function getProgress(lessonId: string) {
  const baseUrl: string = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/progress/${lessonId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }

  return res.json();
}

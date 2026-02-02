// import { Lesson } from "@/types/learning";

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type Vocabulary = {
  lessonId: string;
  word: string;
  translation: string;
}

export type Lesson = {
  lessonId: string;
  order: number;
  level: string;
  estimatedTime: number;
  tags: Array<string>;
  published: boolean;
  title: string;
  description: string;
};

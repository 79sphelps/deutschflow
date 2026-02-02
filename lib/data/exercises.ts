export const exercises = [
  {
    id: "hello",
    prompt: "Translate to German",
    question: "Hello",
    answer: "hallo",
  },
  {
    id: "thanks",
    prompt: "Translate to German",
    question: "Thank you",
    answer: "danke",
  },
];

export type ExerciseOption = Array<string>;

export type Exercises = {
  type: string;
  question: string;
  options: ExerciseOption;
  answer: string;
}

export type Exercise = {
  lessonId: string;
  exercises: Array<Exercises>;
} 
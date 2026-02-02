export type ExerciseOption = Array<string>;

export type Exercises = {
  type: string;
  question: string;
  options?: ExerciseOption;
  answer: string;
};

export type Exercise = {
  lessonId: string;
  exercises: Array<Exercises>;
};
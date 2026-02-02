
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

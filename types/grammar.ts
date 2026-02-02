export type Example = {
    german: string;
    english: string;
};

export type Grammar = {
    lessonId: string;
    topic: string;
    explanation: string;
    examples: Array<Example>;
};
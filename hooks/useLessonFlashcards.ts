"use client";

import { useState } from "react";

export interface Flashcard {
  front: string;
  back: string;
}

export function useLessonFlashcards(cards: Flashcard[]) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const next = () => {
    setShowBack(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  const prev = () => {
    setShowBack(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  const flip = () => setShowBack((v) => !v);

  return {
    card: cards[index],
    index,
    total: cards.length,
    showBack,
    next,
    prev,
    flip,
  };
}

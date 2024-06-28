import QuizComponent from "@/components/quiz";
import { quiz } from "@/data/quiz";

import React from "react";

export default function Quiz() {
  if (!quiz) return <div>Quiz not found</div>;
  return <QuizComponent quiz={quiz} />;
}

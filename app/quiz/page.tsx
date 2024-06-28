"use client";

// import QuizComponent from "@/components/quiz";
import { questionnaire } from "@/data/questions";
// import { quiz } from "@/data/quiz";

import React, { useEffect, useState } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState(questionnaire);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [timer, setTimer] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            return 15;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestion, quizStarted]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setTimer(15);
  };

  return (
    <div>
      <div>
        {!quizStarted ? (
          <div></div>
        ):(
        <div></div>
        )}
      </div>
    </div>
  )
  // if (!quiz) return <div>Quiz not found</div>;
  // return <QuizComponent quiz={quiz} />;
}

import { useContext } from "react";
import QuizContext from "../context/QuizContext";

export default function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Using QuizContex out of QuizProvider");
  return context;
}

import QuestionCard from "./QuestionCard.tsx";
import { useState } from "react";

interface QuestionType {
  question: string;
  answer: string;
  id: number;
}

const questions: QuestionType[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their" +
      " frontend coding skills with projects in HTML, CSS, and JavaScript. It's sutiable for all" +
      " levels and ideal for portfolio building.",
    id: 1,
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free" +
      " \n" +
      "  option providing access to a range of projects suitable for all skill levels.",
    id: 2,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent\n" +
      "  way to showcase your skills to potential employers!",
    id: 3,
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help \n" +
      "  channel where you can ask questions and seek support from other community members.",
    id: 4,
  },
];

function QuestionsList() {
  const [currentOpen, setCurrentOpen] = useState<number>(0);

  function handleOpen(id: number) {
    if (id === currentOpen) {
      setCurrentOpen(0);
      return;
    }
    setCurrentOpen(id);
  }

  return (
    <ul className="divide-y divide-purple-100">
      {questions.map((q: QuestionType) => (
        <QuestionCard
          key={q.id}
          question={q.question}
          answer={q.answer}
          id={q.id}
          currentOpen={currentOpen}
          onOpen={handleOpen}
        />
      ))}
    </ul>
  );
}

export default QuestionsList;

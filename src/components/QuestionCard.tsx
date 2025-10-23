interface QuestionCardProps {
  question: string;
  answer: string;
  id: number;
  currentOpen: number | null;
  onOpen: (id: number) => void;
}

function QuestionCard({
  question,
  answer,
  id,
  currentOpen,
  onOpen,
}: QuestionCardProps) {
  const isOpen = currentOpen === id;
  return (
    <li className="first:pb-300 last:pt-300 [&:not(:first-child):not(:last-child)]:py-300">
      <section className="flex justify-between gap-300">
        <h2 className="text-preset-3 sm:text-preset-2 font-bold text-purple-950">
          {question}
        </h2>
        <button
          aria-label="Expand FAQ answer"
          aria-controls={`faq-${id}`}
          aria-expanded={isOpen}
          id={`faq-${id}-toggle`}
          onClick={() => onOpen(id)}
          className="hover:cursor-pointer"
          type="button"
        >
          <img
            src={`${isOpen ? "/icon-minus.svg" : "/icon-plus.svg"}`}
            alt={`A ${isOpen ? "minus" : "plus"} icon`}
            className="min-h-[30px] min-w-[30px]"
          />
        </button>
      </section>
      <section
        className={`${isOpen ? "grid-rows-[1fr] py-300" : "grid-rows-[0fr]"} grid overflow-hidden transition-all duration-[300ms]`}
        id={`faq-${id}`}
        aria-labelledby={`faq-${id}-toggle`}
        role="region"
      >
        <p className="text-preset-4 sm:text-preset-3 min-h-0 text-purple-600">
          {answer}
        </p>
      </section>
    </li>
  );
}

// `grid grid-rows-[0] overflow-hidden transition-all duration-300`

export default QuestionCard;

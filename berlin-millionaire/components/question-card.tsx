"use client"

import type { Question } from "@/lib/questions"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  selectedAnswer: number | null
  onSelectAnswer: (index: number) => void
  isConfirmed: boolean
  isCorrect: boolean | null
  fiftyFiftyOptions: number[]
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  isConfirmed,
  isCorrect,
  fiftyFiftyOptions,
}: QuestionCardProps) {
  const letters = ["A", "B", "C", "D"]

  const getAnswerClass = (index: number) => {
    if (!isConfirmed) {
      if (selectedAnswer === index) {
        return "bg-berlin-red text-berlin-white"
      }

      if (fiftyFiftyOptions.length > 0 && !fiftyFiftyOptions.includes(index)) {
        return "opacity-20 cursor-not-allowed"
      }

      return "hover:border-berlin-red"
    }

    if (question.correctAnswer === index) {
      return "bg-green-600 text-white"
    }

    if (selectedAnswer === index && isCorrect === false) {
      return "bg-berlin-red text-white"
    }

    return "opacity-50"
  }

  return (
    <div className="space-y-6">
      <div className="berlin-card p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-berlin-red rounded-full"></div>
          <h3 className="text-sm font-medium text-berlin-black uppercase">{question.category}</h3>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-berlin-black uppercase">{question.text}</h3>

        {question.context && <p className="mb-4 text-berlin-black text-sm md:text-base">{question.context}</p>}

        {isConfirmed && isCorrect !== null && (
          <p className="mt-4 text-lg uppercase">
            {isCorrect ? (
              <span className="text-green-600 font-medium">Richtig!</span>
            ) : (
              <span className="text-berlin-red font-medium">
                Falsch! Die richtige Antwort ist {letters[question.correctAnswer]}.
              </span>
            )}
          </p>
        )}
        {isConfirmed && isCorrect !== null && (
          <p className="mt-2 text-sm text-berlin-black/80">{question.explanation}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            disabled={isConfirmed || (fiftyFiftyOptions.length > 0 && !fiftyFiftyOptions.includes(index))}
            className={cn(
              "p-4 border border-berlin-black text-left transition-all",
              "flex items-center",
              "text-berlin-black font-medium bg-berlin-white",
              getAnswerClass(index),
            )}
          >
            <span className="w-8 h-8 flex items-center justify-center bg-berlin-black text-berlin-white mr-3 font-bold">
              {letters[index]}
            </span>
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

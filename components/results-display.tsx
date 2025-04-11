"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LabeledChart } from "@/components/labeled-chart"
import { Trophy, Award, ThumbsUp } from "lucide-react"
import type { GameCorrelation } from "@/types/correlation"

interface ResultsDisplayProps {
  correlations: GameCorrelation[]
  userGuesses: Record<string, { dataset1: string; dataset2: string }>
  score: number
  totalPossibleScore: number
  onPlayAgain: () => void
}

export function ResultsDisplay({
  correlations,
  userGuesses,
  score,
  totalPossibleScore,
  onPlayAgain,
}: ResultsDisplayProps) {
  const percentage = Math.round((score / totalPossibleScore) * 100)

  const getResultIcon = () => {
    if (percentage >= 80) return <Trophy className="h-16 w-16 text-yellow-500" />
    if (percentage >= 50) return <Award className="h-16 w-16 text-blue-500" />
    return <ThumbsUp className="h-16 w-16 text-gray-500" />
  }

  const getResultMessage = () => {
    if (percentage >= 80) return "Amazing! You're a correlation master!"
    if (percentage >= 50) return "Good job! You have a keen eye for data patterns."
    if (percentage >= 30) return "Nice try! Correlations can be tricky."
    return "Don't worry! Spurious correlations are meant to be surprising."
  }

  return (
    <div>
      <Card className="mb-8">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">{getResultIcon()}</div>
          <CardTitle className="text-3xl">
            Your Score: {score}/{totalPossibleScore}
          </CardTitle>
          <p className="text-xl mt-2">{getResultMessage()}</p>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button size="lg" onClick={onPlayAgain}>
            Play Again
          </Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6">The Actual Correlations</h2>

      {correlations.map((correlation) => {
        const userGuess = userGuesses[correlation.id] || { dataset1: "", dataset2: "" }

        const dataset1Correct = userGuess.dataset1 === correlation.dataset1.id
        const dataset2Correct = userGuess.dataset2 === correlation.dataset2.id

        const dataset1UserGuessLabel = correlation.options.dataset1.find(
          (option) => option.id === userGuess.dataset1,
        )?.label

        const dataset2UserGuessLabel = correlation.options.dataset2.find(
          (option) => option.id === userGuess.dataset2,
        )?.label

        return (
          <Card key={correlation.id} className="mb-8">
            <CardHeader>
              <CardTitle>{correlation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <LabeledChart correlation={correlation} />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Dataset A</h3>
                  <div
                    className={`p-4 rounded-md ${dataset1Correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`text-sm font-medium px-2 py-1 rounded ${dataset1Correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {dataset1Correct ? "Correct!" : "Incorrect"}
                      </div>
                    </div>
                    <p className="font-medium">Actual: {correlation.dataset1.label}</p>
                    {!dataset1Correct && userGuess.dataset1 && (
                      <p className="text-gray-600 mt-1">Your guess: {dataset1UserGuessLabel}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">Source: {correlation.dataset1.source}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Dataset B</h3>
                  <div
                    className={`p-4 rounded-md ${dataset2Correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`text-sm font-medium px-2 py-1 rounded ${dataset2Correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {dataset2Correct ? "Correct!" : "Incorrect"}
                      </div>
                    </div>
                    <p className="font-medium">Actual: {correlation.dataset2.label}</p>
                    {!dataset2Correct && userGuess.dataset2 && (
                      <p className="text-gray-600 mt-1">Your guess: {dataset2UserGuessLabel}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">Source: {correlation.dataset2.source}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-lg mb-2">Correlation Explanation</h3>
                <p className="text-gray-700">{correlation.explanation}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

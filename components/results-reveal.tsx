"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LabeledLineGraph } from "@/components/labeled-line-graph"
import { Trophy, Award, ThumbsUp } from "lucide-react"
import type { Dataset } from "@/types/dataset"
import { generateExplanation } from "@/lib/explanation-generator"

interface ResultsRevealProps {
  targetDataset: Dataset
  selectedDataset: Dataset
  bestMatchDataset: Dataset
  correlationResults: Array<{ index: number; correlation: number }>
  score: number
  onNextRound: () => void
}

export function ResultsReveal({
  targetDataset,
  selectedDataset,
  bestMatchDataset,
  correlationResults,
  score,
  onNextRound,
}: ResultsRevealProps) {
  const [explanation] = useState(() =>
    generateExplanation(targetDataset, bestMatchDataset, correlationResults[1].correlation),
  )

  const selectedCorrelationValue = correlationResults.find((r) => r.index === selectedDataset.id)?.correlation || 0

  const getResultIcon = () => {
    if (score >= 80) return <Trophy className="h-16 w-16 text-yellow-500" />
    if (score >= 50) return <Award className="h-16 w-16 text-blue-500" />
    return <ThumbsUp className="h-16 w-16 text-gray-500" />
  }

  const getResultMessage = () => {
    if (score >= 80) return "Amazing! You have a great eye for patterns!"
    if (score >= 50) return "Good job! You found a strong correlation."
    if (score >= 30) return "Nice try! Data patterns can be tricky."
    return "Keep practicing! Finding correlations takes practice."
  }

  return (
    <div>
      <Card className="mb-8">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">{getResultIcon()}</div>
          <CardTitle className="text-3xl">Your Score: {score}</CardTitle>
          <p className="text-xl mt-2">{getResultMessage()}</p>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button size="lg" onClick={onNextRound}>
            Next Round
          </Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6">The Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Target Dataset</CardTitle>
          </CardHeader>
          <CardContent>
            <LabeledLineGraph dataset={targetDataset} />
            <div className="mt-4">
              <h3 className="font-medium text-lg">{targetDataset.name}</h3>
              <p className="text-gray-600 mt-1">{targetDataset.description}</p>
              <p className="text-sm text-gray-500 mt-2">Source: {targetDataset.source}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <LabeledLineGraph dataset={selectedDataset} />
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <div className="text-sm font-medium px-2 py-1 rounded bg-gray-100">
                  Correlation: {selectedCorrelationValue.toFixed(2)}
                </div>
              </div>
              <h3 className="font-medium text-lg">{selectedDataset.name}</h3>
              <p className="text-gray-600 mt-1">{selectedDataset.description}</p>
              <p className="text-sm text-gray-500 mt-2">Source: {selectedDataset.source}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Best Match</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <LabeledLineGraph dataset={targetDataset} />
            <LabeledLineGraph dataset={bestMatchDataset} />
          </div>
          <div className="p-4 bg-gray-50 rounded-md mb-4">
            <div className="flex items-center mb-2">
              <div className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-800">
                Correlation: {correlationResults[1].correlation.toFixed(2)}
              </div>
            </div>
            <h3 className="font-medium text-lg">{bestMatchDataset.name}</h3>
            <p className="text-gray-600 mt-1">{bestMatchDataset.description}</p>
            <p className="text-sm text-gray-500 mt-2">Source: {bestMatchDataset.source}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-lg mb-2">Why might these be related?</h3>
            <div className="p-4 bg-rose-50 border border-rose-100 rounded-md">
              <p className="text-gray-700">{explanation}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineGraphGrid } from "@/components/line-graph-grid"
import { ResultsReveal } from "@/components/results-reveal"
import { allDatasets } from "@/data/all-datasets"
import { calculateCorrelation } from "@/lib/correlation"
import { Loader2 } from "lucide-react"

export default function PlayPage() {
  const [gameState, setGameState] = useState<"selecting" | "calculating" | "results">("selecting")
  const [targetDatasetIndex, setTargetDatasetIndex] = useState<number | null>(null)
  const [selectedDatasetIndex, setSelectedDatasetIndex] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0)
  const [correlationResults, setCorrelationResults] = useState<Array<{ index: number; correlation: number }>>([])
  const [round, setRound] = useState(1)
  const [totalScore, setTotalScore] = useState(0)

  // Initialize the game
  useEffect(() => {
    // Randomly select a target dataset
    const randomIndex = Math.floor(Math.random() * allDatasets.length)
    setTargetDatasetIndex(randomIndex)
  }, [round])

  const handleSelectDataset = (index: number) => {
    if (index === targetDatasetIndex || gameState !== "selecting") return
    setSelectedDatasetIndex(index)
    setGameState("calculating")

    // Calculate correlations between target and all other datasets
    setTimeout(() => {
      const results = allDatasets.map((dataset, idx) => {
        if (idx === targetDatasetIndex) return { index: idx, correlation: 1 }

        const correlation = calculateCorrelation(
          allDatasets[targetDatasetIndex!].data.map((d) => d.value),
          dataset.data.map((d) => d.value),
        )

        return { index: idx, correlation }
      })

      // Sort by correlation strength (absolute value)
      results.sort((a, b) => Math.abs(b.correlation) - Math.abs(a.correlation))
      setCorrelationResults(results)

      // Calculate score based on how close user's selection was to the best match
      const bestMatchIndex = results[1].index // Index 0 is the target itself
      const userSelectionRank = results.findIndex((r) => r.index === index)

      // Score is higher the closer the user's selection is to the best match
      // Perfect match = 100 points, worst match = 10 points
      const newScore = Math.max(10, Math.round(100 - (userSelectionRank - 1) * 15))
      setScore(newScore)
      setTotalScore(totalScore + newScore)

      setGameState("results")
    }, 1500)
  }

  const handleNextRound = () => {
    setGameState("selecting")
    setTargetDatasetIndex(null)
    setSelectedDatasetIndex(null)
    setCorrelationResults([])
    setRound(round + 1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Round {round}</h1>
          <div className="text-gray-600">Total Score: {totalScore}</div>
        </div>

        {gameState === "selecting" && targetDatasetIndex !== null && (
          <>
            <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-lg">Find the dataset that most closely correlates with the highlighted graph.</p>
            </div>
            <LineGraphGrid
              datasets={allDatasets}
              targetIndex={targetDatasetIndex}
              onSelect={handleSelectDataset}
              disabled={false}
            />
          </>
        )}

        {gameState === "calculating" && (
          <div className="flex flex-col items-center justify-center p-12">
            <Loader2 className="h-12 w-12 animate-spin text-rose-600 mb-4" />
            <p className="text-xl">Calculating correlations...</p>
          </div>
        )}

        {gameState === "results" && correlationResults.length > 0 && (
          <ResultsReveal
            targetDataset={allDatasets[targetDatasetIndex!]}
            selectedDataset={allDatasets[selectedDatasetIndex!]}
            bestMatchDataset={allDatasets[correlationResults[1].index]}
            correlationResults={correlationResults}
            score={score}
            onNextRound={handleNextRound}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

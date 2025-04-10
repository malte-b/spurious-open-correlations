"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { UnlabeledChart } from "@/components/unlabeled-chart"
import { CorrelationGuessForm } from "@/components/correlation-guess-form"
import { ResultsDisplay } from "@/components/results-display"
import { gameCorrelations } from "@/data/game-correlations"
import { Loader2 } from "lucide-react"

export default function GamePage() {
  const [currentRound, setCurrentRound] = useState(0)
  const [gameState, setGameState] = useState<"playing" | "submitting" | "results">("playing")
  const [userGuesses, setUserGuesses] = useState<Record<string, { dataset1: string; dataset2: string }>>({})
  const [score, setScore] = useState(0)

  const handleSubmitGuess = (correlationId: string, dataset1: string, dataset2: string) => {
    setUserGuesses({
      ...userGuesses,
      [correlationId]: { dataset1, dataset2 },
    })

    // Simulate loading
    setGameState("submitting")
    setTimeout(() => {
      if (currentRound < gameCorrelations.length - 1) {
        setCurrentRound(currentRound + 1)
        setGameState("playing")
      } else {
        // Calculate score
        let newScore = 0
        Object.entries(userGuesses).forEach(([id, guess]) => {
          const correlation = gameCorrelations.find((c) => c.id === id)
          if (correlation) {
            if (guess.dataset1 === correlation.dataset1.id) newScore++
            if (guess.dataset2 === correlation.dataset2.id) newScore++
          }
        })
        // Add the last guess
        const lastCorrelation = gameCorrelations[currentRound]
        if (dataset1 === lastCorrelation.dataset1.id) newScore++
        if (dataset2 === lastCorrelation.dataset2.id) newScore++

        setScore(newScore)
        setGameState("results")
      }
    }, 1500)
  }

  const handlePlayAgain = () => {
    setCurrentRound(0)
    setGameState("playing")
    setUserGuesses({})
    setScore(0)
  }

  const currentCorrelation = gameCorrelations[currentRound]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {gameState === "playing" || gameState === "submitting" ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                Round {currentRound + 1} of {gameCorrelations.length}
              </h1>
              <div className="text-gray-600">Try to guess what each line represents!</div>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <UnlabeledChart correlation={currentCorrelation} />
              </CardContent>
            </Card>

            {gameState === "submitting" ? (
              <div className="flex justify-center items-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-rose-600" />
                <span className="ml-3 text-lg">Checking your answers...</span>
              </div>
            ) : (
              <CorrelationGuessForm correlation={currentCorrelation} onSubmit={handleSubmitGuess} />
            )}
          </>
        ) : (
          <ResultsDisplay
            correlations={gameCorrelations}
            userGuesses={userGuesses}
            score={score}
            totalPossibleScore={gameCorrelations.length * 2}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

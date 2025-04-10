"use client"

import confetti from "canvas-confetti"
import { useEffect } from "react"
import { ArrowRight } from "lucide-react"

interface GameOverProps {
  amount: string
  onReset: () => void
}

export default function GameOver({ amount, onReset }: GameOverProps) {
  const isMillionaire = amount === "€1.000.000"

  useEffect(() => {
    if (isMillionaire) {
      const duration = 5 * 1000
      const animationEnd = Date.now() + duration

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // since particles fall down, start a bit higher than random
        confetti({
          startVelocity: 30,
          particleCount,
          spread: 360,
          ticks: 60,
          colors: ["#E3000F", "#000000", "#FFFFFF"],
          origin: {
            x: randomInRange(0.1, 0.9),
            y: Math.random() - 0.2,
          },
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isMillionaire])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-berlin-black uppercase">
        {isMillionaire ? "Herzlichen Glückwunsch!" : "Spiel vorbei!"}
      </h2>

      <div className="text-center space-y-4">
        <p className="text-xl uppercase">
          {isMillionaire ? "Du hast den Hauptpreis gewonnen!" : "Mehr Glück beim nächsten Mal!"}
        </p>
        <p className="text-3xl md:text-5xl font-bold text-berlin-red mt-4">{amount}</p>
      </div>

      <button onClick={onReset} className="berlin-button-primary py-3 px-8 text-xl mt-8">
        <span>NOCHMAL SPIELEN</span>
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { getRandomQuestions, prizeLevels, type Question } from "@/lib/questions"
import QuestionCard from "@/components/question-card"
import PrizeLadder from "@/components/prize-ladder"
import Lifelines from "@/components/lifelines"
import GameOver from "@/components/game-over"
import { useSound } from "@/hooks/use-sound"
import Loading from "@/components/loading"
import { ArrowRight } from "lucide-react"

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [wonAmount, setWonAmount] = useState("€0")
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false)
  const [fiftyFiftyOptions, setFiftyFiftyOptions] = useState<number[]>([])
  const [audienceHelpUsed, setAudienceHelpUsed] = useState(false)
  const [audienceHelpData, setAudienceHelpData] = useState<number[]>([])
  const [phoneAFriendUsed, setPhoneAFriendUsed] = useState(false)
  const [phoneAFriendAnswer, setPhoneAFriendAnswer] = useState<string>("")

  const { playSound } = useSound()

  useEffect(() => {
    if (gameStarted && questions.length === 0) {
      setQuestions(getRandomQuestions())
    }
  }, [gameStarted, questions.length])

  const startGame = () => {
    setGameStarted(true)
    playSound("lets-play")
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswerConfirmed) return
    setSelectedAnswer(answerIndex)
    playSound("select-answer")
  }

  const confirmAnswer = () => {
    if (selectedAnswer === null) return

    setIsAnswerConfirmed(true)
    playSound("final-answer")

    setTimeout(() => {
      const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer
      setIsAnswerCorrect(isCorrect)

      if (isCorrect) {
        playSound("correct-answer")

        setTimeout(() => {
          if (currentQuestionIndex === questions.length - 1) {
            // Won the game
            setWonAmount(prizeLevels[currentQuestionIndex].amount)
            setGameOver(true)
            playSound("million")
          } else {
            // Move to next question
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer(null)
            setIsAnswerConfirmed(false)
            setIsAnswerCorrect(null)
            setFiftyFiftyOptions([])
            setAudienceHelpData([])
            setPhoneAFriendAnswer("")
          }
        }, 3000)
      } else {
        playSound("wrong-answer")

        setTimeout(() => {
          // Game over
          let amount = "€0"
          if (currentQuestionIndex >= 10) {
            amount = "€32.000" // Guaranteed amount at question 10
          } else if (currentQuestionIndex >= 5) {
            amount = "€1.000" // Guaranteed amount at question 5
          }
          setWonAmount(amount)
          setGameOver(true)
        }, 3000)
      }
    }, 3000)
  }

  const useFiftyFifty = () => {
    if (fiftyFiftyUsed) return

    const correctAnswer = questions[currentQuestionIndex].correctAnswer
    const incorrectAnswers = [0, 1, 2, 3].filter((i) => i !== correctAnswer)

    // Randomly remove two incorrect answers
    const shuffled = incorrectAnswers.sort(() => Math.random() - 0.5)
    const remainingIncorrect = shuffled[0]
    const optionsToKeep = [correctAnswer, remainingIncorrect].sort()

    setFiftyFiftyOptions(optionsToKeep)
    setFiftyFiftyUsed(true)
    playSound("fifty-fifty")
  }

  const useAudienceHelp = () => {
    if (audienceHelpUsed) return

    const correctAnswer = questions[currentQuestionIndex].correctAnswer
    const difficulty = questions[currentQuestionIndex].difficulty

    // Simulate audience voting with bias toward correct answer based on difficulty
    let correctPercentage = 0
    switch (difficulty) {
      case "easy":
        correctPercentage = Math.floor(Math.random() * 20) + 60 // 60-80% for correct on easy questions
        break
      case "medium":
        correctPercentage = Math.floor(Math.random() * 25) + 45 // 45-70% for correct on medium questions
        break
      case "hard":
        correctPercentage = Math.floor(Math.random() * 30) + 30 // 30-60% for correct on hard questions
        break
    }

    // Calculate remaining percentage for wrong answers
    const remainingPercentage = 100 - correctPercentage

    // Distribute remaining percentage among incorrect answers
    const audienceData = [0, 0, 0, 0].map((_, i) => {
      if (i === correctAnswer) {
        return correctPercentage
      } else {
        // Random distribution for wrong answers
        return 0 // Temporary, will adjust below
      }
    })

    // Distribute remaining percentage among incorrect answers
    const incorrectIndices = [0, 1, 2, 3].filter((i) => i !== correctAnswer)
    let remainingToDistribute = remainingPercentage

    // Handle 50:50 case - if used, audience should give 0% to eliminated options
    if (fiftyFiftyOptions.length > 0) {
      incorrectIndices.forEach((i) => {
        if (!fiftyFiftyOptions.includes(i)) {
          audienceData[i] = 0
        } else if (i !== correctAnswer) {
          audienceData[i] = remainingPercentage
          remainingToDistribute = 0
        }
      })
    } else {
      // Distribute randomly among all incorrect answers
      incorrectIndices.forEach((i, index) => {
        if (index === incorrectIndices.length - 1) {
          // Last one gets whatever is left to ensure sum is 100%
          audienceData[i] = remainingToDistribute
        } else {
          // Random distribution
          const value = Math.floor((Math.random() * remainingToDistribute) / 2)
          audienceData[i] = value
          remainingToDistribute -= value
        }
      })
    }

    setAudienceHelpData(audienceData)
    setAudienceHelpUsed(true)
    playSound("audience")
  }

  const usePhoneAFriend = () => {
    if (phoneAFriendUsed) return

    const correctAnswer = questions[currentQuestionIndex].correctAnswer
    const difficulty = questions[currentQuestionIndex].difficulty
    const letters = ["A", "B", "C", "D"]

    // Probability of friend knowing the answer depends on difficulty
    let correctProbability
    switch (difficulty) {
      case "easy":
        correctProbability = 0.9 // 90% chance for easy questions
        break
      case "medium":
        correctProbability = 0.7 // 70% chance for medium questions
        break
      case "hard":
        correctProbability = 0.5 // 50% chance for hard questions
        break
    }

    // If 50:50 was used, increase probability since there are fewer options
    if (fiftyFiftyOptions.length > 0) {
      correctProbability = (correctProbability + 1) / 2 // Boost probability
    }

    const friendIsCorrect = Math.random() < correctProbability

    let friendAnswer
    if (friendIsCorrect) {
      friendAnswer = correctAnswer
    } else {
      // Pick a random wrong answer
      let wrongAnswers = [0, 1, 2, 3].filter((i) => i !== correctAnswer)

      // If 50:50 was used, only consider remaining options
      if (fiftyFiftyOptions.length > 0) {
        wrongAnswers = wrongAnswers.filter((i) => fiftyFiftyOptions.includes(i))
      }

      friendAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]
    }

    // Generate appropriate response based on confidence
    let confidence, hesitation
    if (friendIsCorrect) {
      confidence = ["Ich bin mir ziemlich sicher", "Ich bin überzeugt", "Ich weiß mit Sicherheit"][
        Math.floor(Math.random() * 3)
      ]
      hesitation = ["", "", ", nach kurzer Überlegung,"][Math.floor(Math.random() * 3)]
    } else {
      confidence = ["Ich denke", "Ich bin mir nicht ganz sicher, aber ich glaube", "Ich rate mal"][
        Math.floor(Math.random() * 3)
      ]
      hesitation = [", hmm...", ", lass mich überlegen...", ", das ist schwierig..."][Math.floor(Math.random() * 3)]
    }

    // Add some personality to the friend's response
    const personalTouch = [
      "Ich habe das neulich in der Zeitung gelesen.",
      "Ich erinnere mich an eine Statistik darüber.",
      "Ich habe darüber eine Dokumentation gesehen.",
      "Das haben wir in der Schule gelernt.",
      "Mein Nachbar arbeitet beim Statistischen Amt.",
      "",
    ][Math.floor(Math.random() * 6)]

    setPhoneAFriendAnswer(`${confidence}${hesitation} die Antwort ist ${letters[friendAnswer]}. ${personalTouch}`)
    setPhoneAFriendUsed(true)
    playSound("phone-a-friend")
  }

  const resetGame = () => {
    setGameStarted(false)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerConfirmed(false)
    setIsAnswerCorrect(null)
    setGameOver(false)
    setWonAmount("€0")
    setFiftyFiftyUsed(false)
    setFiftyFiftyOptions([])
    setAudienceHelpUsed(false)
    setAudienceHelpData([])
    setPhoneAFriendUsed(false)
    setPhoneAFriendAnswer("")
  }

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-xl uppercase">Teste dein Wissen über Berlin mit diesem spannenden Spiel!</p>
          <p className="text-lg text-berlin-black uppercase">Beantworte 15 Fragen richtig, um €1.000.000 zu gewinnen</p>
        </div>
        <button onClick={startGame} className="berlin-button-primary text-lg px-6 py-3">
          <span>LASS UNS SPIELEN!</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    )
  }

  if (gameOver) {
    return <GameOver amount={wonAmount} onReset={resetGame} />
  }

  if (questions.length === 0) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Lifelines
          fiftyFiftyUsed={fiftyFiftyUsed}
          audienceHelpUsed={audienceHelpUsed}
          phoneAFriendUsed={phoneAFriendUsed}
          onFiftyFifty={useFiftyFifty}
          onAudienceHelp={useAudienceHelp}
          onPhoneAFriend={usePhoneAFriend}
          audienceData={audienceHelpData}
          phoneAFriendAnswer={phoneAFriendAnswer}
        />

        <QuestionCard
          question={questions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          isConfirmed={isAnswerConfirmed}
          isCorrect={isAnswerCorrect}
          fiftyFiftyOptions={fiftyFiftyOptions}
        />

        {selectedAnswer !== null && !isAnswerConfirmed && (
          <div className="flex justify-center mt-6">
            <button onClick={confirmAnswer} className="berlin-button-primary">
              <span>ENDGÜLTIGE ANTWORT</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        <PrizeLadder currentLevel={currentQuestionIndex} prizeLevels={prizeLevels} />
      </div>
    </div>
  )
}

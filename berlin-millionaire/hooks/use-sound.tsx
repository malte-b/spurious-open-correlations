"use client"

export function useSound() {
  const sounds = {
    "lets-play": "/sounds/lets-play.mp3",
    "select-answer": "/sounds/select-answer.mp3",
    "final-answer": "/sounds/final-answer.mp3",
    "correct-answer": "/sounds/correct-answer.mp3",
    "wrong-answer": "/sounds/wrong-answer.mp3",
    "fifty-fifty": "/sounds/fifty-fifty.mp3",
    audience: "/sounds/audience.mp3",
    "phone-a-friend": "/sounds/phone-a-friend.mp3",
    million: "/sounds/million.mp3",
  }

  const playSound = (soundName: keyof typeof sounds) => {
    try {
      // In einer echten Implementierung würden wir echte Sounddateien verwenden
      console.log(`Sound wird abgespielt: ${soundName}`)
      // const audio = new Audio(sounds[soundName])
      // audio.play()
    } catch (error) {
      console.error("Fehler beim Abspielen des Sounds:", error)
    }
  }

  return { playSound }
}

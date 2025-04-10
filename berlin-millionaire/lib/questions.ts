export type Question = {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  difficulty: "easy" | "medium" | "hard"
  explanation: string
  category: string
  context?: string
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Wie viele Haushalte in Berlin erhielten im Jahr 2023 Wohngeld?",
    options: ["25.000", "50.565", "75.000", "100.000"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "Im Jahr 2023 erhielten 50.565 Haushalte in Berlin Wohngeld.",
    category: "Wohnen",
    context: "Das entspricht etwa 2,5% aller Berliner Haushalte.",
  },
  {
    id: 2,
    text: "Wie viele Tonnen Hausmüll produzierte Berlin im Jahr 2012?",
    options: ["422.119 Tonnen", "622.119 Tonnen", "822.119 Tonnen", "1.022.119 Tonnen"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "Im Jahr 2012 produzierte Berlin 822.119 Tonnen Hausmüll.",
    category: "Umwelt",
    context: "Das sind etwa 240 kg pro Einwohner oder das Gewicht von 137.000 Elefanten.",
  },
  {
    id: 3,
    text: "Wie viele Handwerksunternehmen waren 2022 in Berlin registriert?",
    options: ["7.683", "17.683", "27.683", "37.683"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "Im Jahr 2022 waren 17.683 Handwerksunternehmen in Berlin registriert.",
    category: "Wirtschaft",
    context: "Das sind mehr als doppelt so viele wie in Frankfurt am Main.",
  },
  {
    id: 4,
    text: "Wie viele Menschen waren 2022 im Handwerkssektor in Berlin beschäftigt?",
    options: ["80.880", "120.880", "150.880", "180.880"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation: "Im Jahr 2022 waren 180.880 Menschen im Handwerkssektor in Berlin beschäftigt.",
    category: "Wirtschaft",
    context: "Das entspricht etwa der Einwohnerzahl von Potsdam.",
  },
  {
    id: 5,
    text: "Wie viele Tonnen Bioabfälle sammelte Berlin im Jahr 2012?",
    options: ["26.499 Tonnen", "76.499 Tonnen", "126.499 Tonnen", "226.499 Tonnen"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "Im Jahr 2012 sammelte Berlin 126.499 Tonnen Bioabfälle.",
    category: "Umwelt",
    context: "Das entspricht dem Gewicht von etwa 25 Eiffeltürmen.",
  },
  {
    id: 6,
    text: "Wie viele Babys wurden 2023 in Berlin geboren?",
    options: ["24.120", "34.120", "44.120", "54.120"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "Im Jahr 2023 wurden 34.120 Babys in Berlin geboren.",
    category: "Demografie",
    context: "Das sind durchschnittlich 93 Geburten pro Tag.",
  },
  {
    id: 7,
    text: "Wie viel Strom (in kWh) verbrauchte das Seniorendomizil Am Alboinplatz im Jahr 2019?",
    options: ["198.356 kWh", "298.356 kWh", "398.356 kWh", "498.356 kWh"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "Im Jahr 2019 verbrauchte das Seniorendomizil Am Alboinplatz 398.356 kWh Strom.",
    category: "Energie",
    context: "Das entspricht dem jährlichen Stromverbrauch von etwa 100 durchschnittlichen Haushalten.",
  },
  {
    id: 8,
    text: "Wie viele Hotels waren 2024 in Berlin geöffnet?",
    options: ["549", "649", "749", "849"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "Im Jahr 2024 waren 749 Hotels in Berlin geöffnet.",
    category: "Tourismus",
    context: "Das sind mehr Hotels als in München und Hamburg zusammen.",
  },
  {
    id: 9,
    text: "Wie viele Übernachtungen wurden 2024 in Berlin verzeichnet?",
    options: ["10.607", "20.607", "30.607", "40.607"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "Im Jahr 2024 wurden in Berlin 30.607 Übernachtungen verzeichnet.",
    category: "Tourismus",
    context: "Das sind etwa 84 Übernachtungen pro Tag.",
  },
  {
    id: 10,
    text: "Wie viele Touristen besuchten Berlin im Jahr 2024?",
    options: ["2.717", "12.717", "22.717", "32.717"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "Im Jahr 2024 besuchten 12.717 Touristen Berlin.",
    category: "Tourismus",
    context: "Das würde das Olympiastadion Berlin nur zu etwa 18% füllen.",
  },
  {
    id: 11,
    text: "In welchem Jahr gab es die meisten Handwerksunternehmen in Berlin?",
    options: ["2019", "2020", "2021", "2022"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation: "2022 gab es die meisten Handwerksunternehmen in Berlin mit 17.683 registrierten Betrieben.",
    category: "Wirtschaft",
    context: "Trotz der Pandemie stieg die Zahl der Handwerksbetriebe in Berlin kontinuierlich an.",
  },
  {
    id: 12,
    text: "Welcher Prozentsatz des Berliner Mülls war 2012 Biomüll?",
    options: ["Etwa 5%", "Etwa 10%", "Etwa 15%", "Etwa 20%"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "Im Jahr 2012 machte Biomüll (126.499 Tonnen) etwa 15% des gesamten Hausmülls (822.119 Tonnen) aus.",
    category: "Umwelt",
    context: "Zum Vergleich: Der bundesweite Durchschnitt lag bei etwa 14%.",
  },
  {
    id: 13,
    text: "Wie viele Personen arbeiteten 2022 durchschnittlich in jedem Handwerksbetrieb in Berlin?",
    options: ["Etwa 5 Personen", "Etwa 10 Personen", "Etwa 15 Personen", "Etwa 20 Personen"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Mit 180.880 Beschäftigten in 17.683 Handwerksbetrieben beschäftigte jeder Betrieb durchschnittlich etwa 10 Personen.",
    category: "Wirtschaft",
    context: "Das ist mehr als der bundesweite Durchschnitt von etwa 8 Personen pro Handwerksbetrieb.",
  },
  {
    id: 14,
    text: "Welche dieser Berliner Statistiken zeigte 2023 einen deutlichen Anstieg?",
    options: ["Tourismus", "Wohngeld", "Handwerksbetriebe", "Energieverbrauch"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "Wohngeld zeigte 2023 einen deutlichen Anstieg, wobei 50.565 Haushalte Leistungen erhielten.",
    category: "Wohnen",
    context: "Dies war eine Steigerung von über 30% im Vergleich zum Vorjahr.",
  },
  {
    id: 15,
    text: "Wie viele Gäste übernachteten 2024 durchschnittlich in jedem Berliner Hotel?",
    options: ["Etwa 10 Gäste", "Etwa 17 Gäste", "Etwa 25 Gäste", "Etwa 35 Gäste"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "Mit 12.717 Gästen in 749 Hotels hatte jedes Hotel durchschnittlich etwa 17 Gäste.",
    category: "Tourismus",
    context: "Die Auslastung der Berliner Hotels lag damit bei etwa 65%.",
  },
]

export const prizeLevels = [
  { level: 1, amount: "€100" },
  { level: 2, amount: "€200" },
  { level: 3, amount: "€300" },
  { level: 4, amount: "€500" },
  { level: 5, amount: "€1.000" },
  { level: 6, amount: "€2.000" },
  { level: 7, amount: "€4.000" },
  { level: 8, amount: "€8.000" },
  { level: 9, amount: "€16.000" },
  { level: 10, amount: "€32.000" },
  { level: 11, amount: "€64.000" },
  { level: 12, amount: "€125.000" },
  { level: 13, amount: "€250.000" },
  { level: 14, amount: "€500.000" },
  { level: 15, amount: "€1.000.000" },
]

export function getQuestionsByDifficulty(difficulty: "easy" | "medium" | "hard"): Question[] {
  return questions.filter((q) => q.difficulty === difficulty)
}

export function getRandomQuestions(): Question[] {
  const easy = getQuestionsByDifficulty("easy")
  const medium = getQuestionsByDifficulty("medium")
  const hard = getQuestionsByDifficulty("hard")

  // Shuffle each array
  const shuffledEasy = [...easy].sort(() => Math.random() - 0.5)
  const shuffledMedium = [...medium].sort(() => Math.random() - 0.5)
  const shuffledHard = [...hard].sort(() => Math.random() - 0.5)

  // Take 5 easy, 5 medium, 5 hard
  return [...shuffledEasy.slice(0, 5), ...shuffledMedium.slice(0, 5), ...shuffledHard.slice(0, 5)].sort((a, b) => {
    // Sort by difficulty
    const difficultyOrder = { easy: 1, medium: 2, hard: 3 }
    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
  })
}

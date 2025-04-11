import type { Dataset } from "@/types/dataset"

/**
 * Generate a plausible explanation for why two datasets might be correlated
 */
export function generateExplanation(dataset1: Dataset, dataset2: Dataset, correlation: number): string {
  // Determine if it's a positive or negative correlation
  const correlationType = correlation > 0 ? "positive" : "negative"
  const correlationStrength = Math.abs(correlation) > 0.7 ? "strong" : Math.abs(correlation) > 0.4 ? "moderate" : "weak"

  // Generate a basic explanation template
  const explanations = [
    `The ${correlationStrength} ${correlationType} correlation between ${dataset1.name} and ${dataset2.name} could be explained by several factors. ${dataset1.name} might influence ${dataset2.name} through changes in urban development and population behavior. For example, as ${dataset1.name} ${correlation > 0 ? "increases" : "decreases"}, it could affect how people interact with their environment, leading to corresponding changes in ${dataset2.name}.`,

    `Berlin's changing demographics and urban landscape might explain why ${dataset1.name} and ${dataset2.name} show a ${correlationStrength} ${correlationType} correlation. Both trends could be responding to similar underlying factors such as population growth, economic development, or cultural shifts in the city.`,

    `The ${correlationStrength} ${correlationType} correlation between ${dataset1.name} and ${dataset2.name} might reflect Berlin's evolution as a modern European capital. Both datasets could be responding to similar policy changes, infrastructure investments, or social trends that have shaped the city over this time period.`,

    `While ${dataset1.name} and ${dataset2.name} show a ${correlationStrength} ${correlationType} correlation, they're likely both influenced by broader trends in Berlin's development rather than directly causing each other. Factors like tourism growth, technological adoption, and changing lifestyles could be driving both trends simultaneously.`,

    `The ${correlationStrength} ${correlationType} relationship between ${dataset1.name} and ${dataset2.name} might be explained by Berlin's unique cultural and economic evolution. As the city has transformed since reunification, many aspects of urban life have changed in parallel, creating statistical relationships between seemingly unrelated measurements.`,
  ]

  // Randomly select an explanation
  const randomIndex = Math.floor(Math.random() * explanations.length)
  return explanations[randomIndex]
}

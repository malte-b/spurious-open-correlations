/**
 * Calculate the Pearson correlation coefficient between two arrays of numbers
 */
export function calculateCorrelation(x: number[], y: number[]): number {
  if (x.length !== y.length || x.length === 0) {
    return 0
  }

  const n = x.length

  // Calculate sums
  const sum_x = x.reduce((a, b) => a + b, 0)
  const sum_y = y.reduce((a, b) => a + b, 0)
  const sum_xy = x.map((xi, i) => xi * y[i]).reduce((a, b) => a + b, 0)
  const sum_x2 = x.map((xi) => xi * xi).reduce((a, b) => a + b, 0)
  const sum_y2 = y.map((yi) => yi * yi).reduce((a, b) => a + b, 0)

  // Calculate Pearson correlation coefficient
  const numerator = n * sum_xy - sum_x * sum_y
  const denominator = Math.sqrt((n * sum_x2 - sum_x * sum_x) * (n * sum_y2 - sum_y * sum_y))

  if (denominator === 0) return 0

  return numerator / denominator
}

"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { GameCorrelation } from "@/types/correlation"

interface LabeledChartProps {
  correlation: GameCorrelation
}

export function LabeledChart({ correlation }: LabeledChartProps) {
  const [chartData, setChartData] = useState<any[]>([])
  const [correlationValue, setCorrelationValue] = useState<number>(0)

  useEffect(() => {
    // Combine the two datasets
    const combinedData = correlation.dataset1.data.map((item, index) => {
      return {
        year: item.year,
        [correlation.dataset1.id]: item.value,
        [correlation.dataset2.id]: correlation.dataset2.data[index]?.value || 0,
      }
    })

    setChartData(combinedData)

    // Calculate Pearson correlation coefficient
    const calculateCorrelation = () => {
      const x = correlation.dataset1.data.map((d) => d.value)
      const y = correlation.dataset2.data.map((d) => d.value)

      const n = x.length
      const sum_x = x.reduce((a, b) => a + b, 0)
      const sum_y = y.reduce((a, b) => a + b, 0)
      const sum_xy = x.map((xi, i) => xi * y[i]).reduce((a, b) => a + b, 0)
      const sum_x2 = x.map((xi) => xi * xi).reduce((a, b) => a + b, 0)
      const sum_y2 = y.map((yi) => yi * yi).reduce((a, b) => a + b, 0)

      const numerator = n * sum_xy - sum_x * sum_y
      const denominator = Math.sqrt((n * sum_x2 - sum_x * sum_x) * (n * sum_y2 - sum_y * sum_y))

      return numerator / denominator
    }

    setCorrelationValue(calculateCorrelation())
  }, [correlation])

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Correlation coefficient: {correlationValue.toFixed(2)} (
          {correlationValue > 0.7
            ? "Strong positive"
            : correlationValue < -0.7
              ? "Strong negative"
              : correlationValue > 0.3
                ? "Moderate positive"
                : correlationValue < -0.3
                  ? "Moderate negative"
                  : "Weak"}{" "}
          correlation)
        </p>
      </div>
      <ChartContainer
        config={{
          [correlation.dataset1.id]: {
            label: correlation.dataset1.label,
            color: "hsl(var(--chart-1))",
            scale: "linear",
          },
          [correlation.dataset2.id]: {
            label: correlation.dataset2.label,
            color: "hsl(var(--chart-2))",
            scale: "linear",
          },
        }}
        className="h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" orientation="left" stroke="var(--color-dataset1)" />
            <YAxis yAxisId="right" orientation="right" stroke="var(--color-dataset2)" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey={correlation.dataset1.id}
              stroke="var(--color-dataset1)"
              name={correlation.dataset1.label}
              dot={{ r: 4 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey={correlation.dataset2.id}
              stroke="var(--color-dataset2)"
              name={correlation.dataset2.label}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

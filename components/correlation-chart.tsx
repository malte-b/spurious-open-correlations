"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { Correlation } from "@/types/correlation"

interface CorrelationChartProps {
  correlation: Correlation
  className?: string
}

export function CorrelationChart({ correlation, className }: CorrelationChartProps) {
  const [chartData, setChartData] = useState<any[]>([])
  const [correlationValue, setCorrelationValue] = useState<number>(0)

  useEffect(() => {
    // Combine the two datasets
    const combinedData = correlation.dataset1.data.map((item, index) => {
      return {
        year: item.year,
        [correlation.dataset1.name]: item.value,
        [correlation.dataset2.name]: correlation.dataset2.data[index]?.value || 0,
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
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle>{correlation.title}</CardTitle>
        <CardDescription>
          Correlation coefficient: {correlationValue.toFixed(2)}(
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
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            [correlation.dataset1.name]: {
              label: correlation.dataset1.label,
              color: "hsl(var(--chart-1))",
              scale: "linear",
            },
            [correlation.dataset2.name]: {
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
                dataKey={correlation.dataset1.name}
                stroke="var(--color-dataset1)"
                name={correlation.dataset1.label}
                dot={{ r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey={correlation.dataset2.name}
                stroke="var(--color-dataset2)"
                name={correlation.dataset2.label}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">{correlation.dataset1.label}</h3>
            <p className="text-gray-600">{correlation.dataset1.description}</p>
            <p className="text-sm text-gray-500 mt-2">Source: {correlation.dataset1.source}</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">{correlation.dataset2.label}</h3>
            <p className="text-gray-600">{correlation.dataset2.description}</p>
            <p className="text-sm text-gray-500 mt-2">Source: {correlation.dataset2.source}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import type { GameCorrelation } from "@/types/correlation"

interface UnlabeledChartProps {
  correlation: GameCorrelation
}

export function UnlabeledChart({ correlation }: UnlabeledChartProps) {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    // Combine the two datasets
    const combinedData = correlation.dataset1.data.map((item, index) => {
      return {
        year: item.year,
        dataset1: item.value,
        dataset2: correlation.dataset2.data[index]?.value || 0,
      }
    })

    setChartData(combinedData)
  }, [correlation])

  return (
    <div className="w-full">
      <ChartContainer
        config={{
          dataset1: {
            label: "Dataset A",
            color: "hsl(var(--chart-1))",
            scale: "linear",
          },
          dataset2: {
            label: "Dataset B",
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="dataset1"
              stroke="var(--color-dataset1)"
              name="Dataset A"
              dot={{ r: 4 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="dataset2"
              stroke="var(--color-dataset2)"
              name="Dataset B"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <div>
          <span className="inline-block w-4 h-4 bg-[hsl(var(--chart-1))] rounded-full mr-2"></span>
          Dataset A
        </div>
        <div>
          <span className="inline-block w-4 h-4 bg-[hsl(var(--chart-2))] rounded-full mr-2"></span>
          Dataset B
        </div>
      </div>
    </div>
  )
}

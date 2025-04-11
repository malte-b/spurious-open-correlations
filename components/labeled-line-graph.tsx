"use client"

import { useEffect, useRef } from "react"
import type { Dataset } from "@/types/dataset"

interface LabeledLineGraphProps {
  dataset: Dataset
}

export function LabeledLineGraph({ dataset }: LabeledLineGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Normalize data for drawing
    const values = dataset.data.map((d) => d.value)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)
    const range = maxValue - minValue || 1 // Avoid division by zero

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#d1d5db" // gray-300
    ctx.lineWidth = 1

    // X-axis
    ctx.moveTo(40, rect.height - 30)
    ctx.lineTo(rect.width - 20, rect.height - 30)

    // Y-axis
    ctx.moveTo(40, 20)
    ctx.lineTo(40, rect.height - 30)

    ctx.stroke()

    // Draw axis labels
    ctx.fillStyle = "#6b7280" // gray-500
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    // X-axis labels (years)
    const years = dataset.data.map((d) => d.year)
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)
    const yearStep = Math.ceil((maxYear - minYear) / 5) // Show ~5 labels

    for (let year = minYear; year <= maxYear; year += yearStep) {
      const x = 40 + ((year - minYear) / (maxYear - minYear)) * (rect.width - 60)
      ctx.fillText(year.toString(), x, rect.height - 15)
    }

    // Y-axis labels
    const valueStep = Math.ceil(range / 5) // Show ~5 labels
    for (let i = 0; i <= 5; i++) {
      const value = minValue + i * valueStep
      const y = rect.height - 30 - (i / 5) * (rect.height - 50)
      ctx.textAlign = "right"
      ctx.fillText(value.toFixed(0), 35, y + 3)
    }

    // Draw title
    ctx.fillStyle = "#111827" // gray-900
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText(dataset.name, rect.width / 2, 15)

    // Draw line
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = "#e11d48" // rose-600

    dataset.data.forEach((point, i) => {
      const x = 40 + (i / (dataset.data.length - 1)) * (rect.width - 60)
      const y = rect.height - 30 - ((point.value - minValue) / range) * (rect.height - 50)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Add dots at data points
    dataset.data.forEach((point, i) => {
      const x = 40 + (i / (dataset.data.length - 1)) * (rect.width - 60)
      const y = rect.height - 30 - ((point.value - minValue) / range) * (rect.height - 50)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#e11d48" // rose-600
      ctx.fill()
    })
  }, [dataset])

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full h-[200px]" style={{ display: "block" }} />
    </div>
  )
}

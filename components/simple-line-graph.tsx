"use client"

import { useEffect, useRef } from "react"
import type { DataPoint } from "@/types/dataset"

interface SimpleLineGraphProps {
  data: DataPoint[]
  highlighted: boolean
}

export function SimpleLineGraph({ data, highlighted }: SimpleLineGraphProps) {
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
    const values = data.map((d) => d.value)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)
    const range = maxValue - minValue || 1 // Avoid division by zero

    // Draw line
    ctx.beginPath()
    ctx.lineWidth = highlighted ? 3 : 2
    ctx.strokeStyle = highlighted ? "#e11d48" : "#6b7280"

    data.forEach((point, i) => {
      const x = (i / (data.length - 1)) * rect.width
      const y = rect.height - ((point.value - minValue) / range) * (rect.height * 0.8) - rect.height * 0.1

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Add dots at data points
    data.forEach((point, i) => {
      const x = (i / (data.length - 1)) * rect.width
      const y = rect.height - ((point.value - minValue) / range) * (rect.height * 0.8) - rect.height * 0.1

      ctx.beginPath()
      ctx.arc(x, y, highlighted ? 4 : 3, 0, Math.PI * 2)
      ctx.fillStyle = highlighted ? "#e11d48" : "#6b7280"
      ctx.fill()
    })
  }, [data, highlighted])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
}

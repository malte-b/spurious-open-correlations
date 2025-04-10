"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SimpleLineGraph } from "@/components/simple-line-graph"
import type { Dataset } from "@/types/dataset"

interface LineGraphGridProps {
  datasets: Dataset[]
  targetIndex: number
  onSelect: (index: number) => void
  disabled: boolean
}

export function LineGraphGrid({ datasets, targetIndex, onSelect, disabled }: LineGraphGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {datasets.map((dataset, index) => (
        <Card
          key={index}
          className={`
            ${index === targetIndex ? "ring-2 ring-rose-500" : "cursor-pointer hover:shadow-md transition-shadow"}
            ${disabled ? "opacity-70" : ""}
          `}
          onClick={() => !disabled && index !== targetIndex && onSelect(index)}
        >
          <CardContent className="p-4">
            <div className="aspect-[4/3] w-full">
              <SimpleLineGraph data={dataset.data} highlighted={index === targetIndex} />
            </div>
            {index === targetIndex && (
              <div className="mt-2 text-center text-sm font-medium text-rose-600">Target Dataset</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

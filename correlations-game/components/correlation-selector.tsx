"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Correlation } from "@/types/correlation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface CorrelationSelectorProps {
  correlations: Correlation[]
}

export function CorrelationSelector({ correlations }: CorrelationSelectorProps) {
  const router = useRouter()
  const [selectedCorrelation, setSelectedCorrelation] = useState<number>(0)

  const handleViewCorrelation = () => {
    // In a real app, this would navigate to a specific correlation page
    // For now, we'll just scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {correlations.map((correlation, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${selectedCorrelation === index ? "ring-2 ring-rose-500" : ""}`}
            onClick={() => setSelectedCorrelation(index)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{correlation.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {correlation.dataset1.label} vs. {correlation.dataset2.label}
                  </p>
                </div>
                {selectedCorrelation === index && (
                  <div className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center text-white">✓</div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full" onClick={handleViewCorrelation}>
        View Correlation <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { GameCorrelation } from "@/types/correlation"

interface CorrelationGuessFormProps {
  correlation: GameCorrelation
  onSubmit: (correlationId: string, dataset1: string, dataset2: string) => void
}

export function CorrelationGuessForm({ correlation, onSubmit }: CorrelationGuessFormProps) {
  const [dataset1Selection, setDataset1Selection] = useState("")
  const [dataset2Selection, setDataset2Selection] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (dataset1Selection && dataset2Selection) {
      onSubmit(correlation.id, dataset1Selection, dataset2Selection)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>What is Dataset A?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={dataset1Selection} onValueChange={setDataset1Selection}>
              {correlation.options.dataset1.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value={option.id} id={`dataset1-${option.id}`} />
                  <Label htmlFor={`dataset1-${option.id}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What is Dataset B?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={dataset2Selection} onValueChange={setDataset2Selection}>
              {correlation.options.dataset2.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value={option.id} id={`dataset2-${option.id}`} />
                  <Label htmlFor={`dataset2-${option.id}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button type="submit" size="lg" className="px-8" disabled={!dataset1Selection || !dataset2Selection}>
          Submit Guess
        </Button>
      </div>
    </form>
  )
}

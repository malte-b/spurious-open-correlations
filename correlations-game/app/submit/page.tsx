"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to a server
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Submit a Correlation</h1>

          {submitted ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
              <p className="mb-4">
                Your correlation suggestion has been submitted. Our team will review it and may add it to the website.
              </p>
              <Button onClick={() => setSubmitted(false)}>Submit Another</Button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-6">
                Have you discovered an interesting correlation in Berlin's data? Submit it here and we might feature it
                on our website!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Correlation Title</Label>
                  <Input id="title" placeholder="e.g., Bike Lanes vs. Coffee Shops" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <h3 className="font-semibold text-lg">First Dataset</h3>

                    <div className="space-y-2">
                      <Label htmlFor="dataset1-name">Dataset Name</Label>
                      <Input id="dataset1-name" placeholder="e.g., Bike Lanes" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataset1-source">Data Source</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a data source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transportation">Transportation Department</SelectItem>
                          <SelectItem value="environment">Environmental Agency</SelectItem>
                          <SelectItem value="health">Health Department</SelectItem>
                          <SelectItem value="education">Education Department</SelectItem>
                          <SelectItem value="economy">Economic Affairs</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataset1-description">Brief Description</Label>
                      <Textarea id="dataset1-description" placeholder="Describe what this data represents" required />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-semibold text-lg">Second Dataset</h3>

                    <div className="space-y-2">
                      <Label htmlFor="dataset2-name">Dataset Name</Label>
                      <Input id="dataset2-name" placeholder="e.g., Coffee Shops" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataset2-source">Data Source</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a data source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transportation">Transportation Department</SelectItem>
                          <SelectItem value="environment">Environmental Agency</SelectItem>
                          <SelectItem value="health">Health Department</SelectItem>
                          <SelectItem value="education">Education Department</SelectItem>
                          <SelectItem value="economy">Economic Affairs</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataset2-description">Brief Description</Label>
                      <Textarea id="dataset2-description" placeholder="Describe what this data represents" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Any additional information or observations about this correlation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email (optional)</Label>
                  <Input id="email" type="email" placeholder="We'll credit you if we publish your correlation" />
                </div>

                <Button type="submit" className="w-full">
                  Submit Correlation
                </Button>
              </form>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

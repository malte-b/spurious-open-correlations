import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Berlin Data Correlation Matcher</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Match patterns in data and discover surprising correlations in Berlin's datasets!
          </p>
        </section>

        <section className="mb-16 flex flex-col items-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full text-center">
            <h2 className="text-2xl font-bold mb-6">How to Play</h2>
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start">
                <div className="bg-rose-100 text-rose-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  1
                </div>
                <p>You'll see a grid of unlabeled line graphs without any axes</p>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-100 text-rose-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  2
                </div>
                <p>One graph is automatically highlighted - your task is to find its best match</p>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-100 text-rose-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  3
                </div>
                <p>Select the graph that you think correlates most closely with the highlighted one</p>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-100 text-rose-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  4
                </div>
                <p>Earn points based on how well your selected graphs actually correlate</p>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-100 text-rose-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  5
                </div>
                <p>Discover what the data actually represents and why they might be related!</p>
              </div>
            </div>
            <Link href="/play">
              <Button size="lg" className="px-8">
                Start Playing
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About This Game</h2>
            <p className="mb-4">
              This game showcases strange and amusing correlations found in Berlin's open data. Inspired by Tyler
              Vigen's "Spurious Correlations," we challenge you to find patterns in seemingly unrelated datasets.
            </p>
            <p>
              The purpose is to demonstrate that correlation doesn't always imply causation, and to have some fun with
              Berlin's public data.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

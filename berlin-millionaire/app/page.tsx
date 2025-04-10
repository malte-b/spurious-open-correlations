import { Suspense } from "react"
import Game from "@/components/game"
import Loading from "@/components/loading"
import BerlinHeader from "@/components/berlin-header"

export default function Home() {
  return (
    <main className="min-h-screen bg-berlin-white">
      <BerlinHeader />
      <div className="berlin-container">
        <h1 className="text-4xl md:text-5xl berlin-heading text-center mb-4">WER WIRD MILLIONÄR?</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 text-berlin-black">BERLIN EDITION</h2>

        <Suspense fallback={<Loading />}>
          <Game />
        </Suspense>
      </div>
    </main>
  )
}

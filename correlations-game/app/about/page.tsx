import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Berlin Correlation Matcher</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">The Game</h2>
            <p className="mb-4">
              Berlin Correlation Matcher is an interactive data visualization game inspired by Tyler Vigen's "Spurious
              Correlations" website. We challenge players to find patterns in unlabeled data and match datasets that
              appear to correlate with each other.
            </p>
            <p className="mb-4">
              The purpose of this game is to demonstrate that correlation doesn't always imply causation, and to
              showcase Berlin's rich open data resources in an entertaining way.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Play</h2>
            <p className="mb-4">
              You'll be presented with a grid of unlabeled line graphs. One graph will be highlighted as your target.
              Your challenge is to select the graph that you think correlates most closely with the target. After making
              your selection, we'll reveal what the data actually represents and explain why the datasets might be
              related.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Sources</h2>
            <p className="mb-4">
              All data used in this game comes from the Berlin Open Data Portal (daten.berlin.de), which provides free
              access to a wide range of public datasets about the city of Berlin.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            <p>
              This game is for entertainment and educational purposes only. The correlations shown here are statistical
              coincidences and do not imply any causal relationship between the datasets. Always remember: correlation
              does not imply causation!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

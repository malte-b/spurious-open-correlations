import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Berlin Correlation Matcher</h3>
            <p className="text-gray-300">Find patterns in data and discover surprising correlations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://daten.berlin.de" className="text-gray-300 hover:text-white transition-colors">
                  Berlin Open Data Portal
                </Link>
              </li>
              <li>
                <Link
                  href="https://tylervigen.com/spurious-correlations"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Original Spurious Correlations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300">
              All correlations shown are for entertainment purposes only. Remember that correlation does not imply
              causation!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Berlin Correlation Matcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

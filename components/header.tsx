import Link from "next/link"
import { BarChartIcon as ChartBar } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <ChartBar className="h-6 w-6 text-rose-600" />
          <span>Berlin Correlation Matcher</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/play" className="text-gray-700 hover:text-rose-600 transition-colors">
                Play
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

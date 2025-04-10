export default function BerlinHeader() {
  return (
    <header className="bg-berlin-white border-b border-berlin-gray-200 py-4">
      <div className="berlin-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-berlin-black">
            <div className="bg-berlin-white p-2">
              <span className="text-berlin-red font-bold text-2xl">BERLIN</span>
            </div>
            <div className="bg-berlin-white p-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1"
                />
                <path
                  d="M8.5 7.5C8.5 7.5 8 8.5 8 10C8 11.5 9 12 9 12C9 12 8 12.5 8 14C8 15.5 8.5 16.5 8.5 16.5M15.5 7.5C15.5 7.5 16 8.5 16 10C16 11.5 15 12 15 12C15 12 16 12.5 16 14C16 15.5 15.5 16.5 15.5 16.5M10 7C10 7 9.5 8 9.5 9.5C9.5 11 10.5 11.5 10.5 11.5C10.5 11.5 9.5 12 9.5 13.5C9.5 15 10 16 10 16M14 7C14 7 14.5 8 14.5 9.5C14.5 11 13.5 11.5 13.5 11.5C13.5 11.5 14.5 12 14.5 13.5C14.5 15 14 16 14 16M12 6.5C12 6.5 11.5 7.5 11.5 9C11.5 10.5 12.5 11 12.5 11C12.5 11 11.5 11.5 11.5 13C11.5 14.5 12 15.5 12 15.5"
                  stroke="black"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-berlin-black uppercase">Statistik-Quiz</p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm text-berlin-black uppercase">Ein Projekt des</p>
          <p className="text-berlin-black font-medium uppercase">Landes Berlin</p>
        </div>
      </div>
    </header>
  )
}

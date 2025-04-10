export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 border-4 border-berlin-gray-300 border-t-berlin-red rounded-full animate-spin"></div>
      <p className="mt-4 text-xl text-berlin-black uppercase">Fragen werden geladen...</p>
    </div>
  )
}

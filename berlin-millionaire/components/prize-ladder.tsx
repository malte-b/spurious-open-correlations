import { cn } from "@/lib/utils"

interface PrizeLadderProps {
  currentLevel: number
  prizeLevels: { level: number; amount: string }[]
}

export default function PrizeLadder({ currentLevel, prizeLevels }: PrizeLadderProps) {
  return (
    <div className="berlin-card p-4">
      <h3 className="text-xl font-semibold text-center mb-4 text-berlin-black uppercase">Gewinnleiter</h3>
      <div className="space-y-2">
        {[...prizeLevels].reverse().map((prize) => {
          const isCurrentLevel = prize.level - 1 === currentLevel
          const isPastLevel = prize.level - 1 < currentLevel
          const isGuaranteedLevel = prize.level === 5 || prize.level === 10 || prize.level === 15

          return (
            <div
              key={prize.level}
              className={cn(
                "p-2 flex justify-between items-center",
                isCurrentLevel && "bg-berlin-red text-berlin-white",
                isPastLevel && "text-berlin-black/50",
                !isCurrentLevel && !isPastLevel && isGuaranteedLevel && "bg-berlin-gray-200 font-medium",
                !isCurrentLevel &&
                  !isPastLevel &&
                  !isGuaranteedLevel &&
                  "bg-berlin-white border border-berlin-gray-200",
              )}
            >
              <span>{prize.level}</span>
              <span className="font-bold">{prize.amount}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

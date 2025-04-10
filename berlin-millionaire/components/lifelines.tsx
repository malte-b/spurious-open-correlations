"use client"

import { Divide, Users, Phone, CheckCircle, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

interface LifelinesProps {
  fiftyFiftyUsed: boolean
  audienceHelpUsed: boolean
  phoneAFriendUsed: boolean
  onFiftyFifty: () => void
  onAudienceHelp: () => void
  onPhoneAFriend: () => void
  audienceData: number[]
  phoneAFriendAnswer: string
}

export default function Lifelines({
  fiftyFiftyUsed,
  audienceHelpUsed,
  phoneAFriendUsed,
  onFiftyFifty,
  onAudienceHelp,
  onPhoneAFriend,
  audienceData,
  phoneAFriendAnswer,
}: LifelinesProps) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onFiftyFifty}
        disabled={fiftyFiftyUsed}
        className={`w-16 h-16 flex items-center justify-center ${
          fiftyFiftyUsed ? "bg-berlin-gray-200 text-berlin-gray-500" : "bg-berlin-red text-berlin-white"
        }`}
        title="50:50"
      >
        {fiftyFiftyUsed ? <CheckCircle className="h-8 w-8" /> : <Divide className="h-8 w-8" />}
      </button>

      <Dialog>
        <DialogTrigger asChild>
          <button
            onClick={audienceHelpUsed ? undefined : onAudienceHelp}
            disabled={audienceHelpUsed && audienceData.length === 0}
            className={`w-16 h-16 flex items-center justify-center ${
              audienceHelpUsed && audienceData.length === 0
                ? "bg-berlin-gray-200 text-berlin-gray-500"
                : "bg-berlin-red text-berlin-white"
            }`}
            title="Publikumsjoker"
          >
            {audienceHelpUsed ? <CheckCircle className="h-8 w-8" /> : <Users className="h-8 w-8" />}
          </button>
        </DialogTrigger>
        {audienceData.length > 0 && (
          <DialogContent className="bg-berlin-white border border-berlin-black">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-berlin-black uppercase">Publikumsergebnis</DialogTitle>
            </DialogHeader>
            <div className="flex items-end justify-center h-64 space-x-4 mt-4">
              {audienceData.map((percentage, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-berlin-red w-16" style={{ height: `${percentage * 2}px` }}></div>
                  <div className="mt-2 font-bold">{["A", "B", "C", "D"][i]}</div>
                  <div>{percentage}%</div>
                </div>
              ))}
            </div>
            <DialogClose asChild>
              <button className="berlin-button-primary mx-auto mt-4">
                <span>SCHLIESSEN</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button
            onClick={phoneAFriendUsed ? undefined : onPhoneAFriend}
            disabled={phoneAFriendUsed && phoneAFriendAnswer === ""}
            className={`w-16 h-16 flex items-center justify-center ${
              phoneAFriendUsed && phoneAFriendAnswer === ""
                ? "bg-berlin-gray-200 text-berlin-gray-500"
                : "bg-berlin-red text-berlin-white"
            }`}
            title="Telefonjoker"
          >
            {phoneAFriendUsed ? <CheckCircle className="h-8 w-8" /> : <Phone className="h-8 w-8" />}
          </button>
        </DialogTrigger>
        {phoneAFriendAnswer && (
          <DialogContent className="bg-berlin-white border border-berlin-black">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-berlin-black uppercase">Telefonjoker</DialogTitle>
            </DialogHeader>
            <div className="p-6 text-center">
              <div className="mb-4">
                <span className="text-berlin-black font-bold uppercase">Dein Freund sagt:</span>
              </div>
              <p className="text-xl">{phoneAFriendAnswer}</p>
            </div>
            <DialogClose asChild>
              <button className="berlin-button-primary mx-auto mt-4">
                <span>SCHLIESSEN</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

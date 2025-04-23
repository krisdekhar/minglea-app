import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 tracking-tight">MINGLEA</h1>
          <p className="text-xl md:text-2xl font-medium text-purple-700">Plan something unforgettable.</p>
          <p className="text-gray-600 mt-2">With Minglea, it's simple, fun, and beautiful.</p>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-100 rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-700 text-xl">🎂</span>
              </div>
              <p className="text-purple-700 font-medium">Birthdays</p>
            </div>
            <div className="bg-mint-100 rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-700 text-xl">🍽️</span>
              </div>
              <p className="text-green-700 font-medium">Dinners</p>
            </div>
            <div className="bg-peach-100 rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-orange-700 text-xl">🧺</span>
              </div>
              <p className="text-orange-700 font-medium">Picnics</p>
            </div>
            <div className="bg-amber-100 rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-amber-700 text-xl">✨</span>
              </div>
              <p className="text-amber-700 font-medium">Custom</p>
            </div>
          </div>
        </div>

        <Link href="/plan">
          <Button className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700">
            Start Planning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

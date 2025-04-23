import { Loader2 } from "lucide-react"

export default function LoadingState() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-amber-50 p-4 md:p-8">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600 mx-auto" />
        <h2 className="text-2xl font-bold text-purple-800">Creating your perfect event...</h2>
        <p className="text-gray-600">We're putting together a beautiful plan just for you.</p>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cake, UtensilsCrossed, Tent, Sparkles } from "lucide-react"

interface OccasionStepProps {
  value: string
  onChange: (value: string) => void
}

const occasions = [
  { id: "birthday", label: "Birthday", icon: Cake, color: "bg-purple-100 text-purple-600" },
  { id: "dinner", label: "Dinner", icon: UtensilsCrossed, color: "bg-green-100 text-green-600" },
  { id: "picnic", label: "Picnic", icon: Tent, color: "bg-orange-100 text-orange-600" },
  { id: "custom", label: "Custom", icon: Sparkles, color: "bg-amber-100 text-amber-600" },
]

export default function OccasionStep({ value, onChange }: OccasionStepProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {occasions.map((occasion) => (
        <Card
          key={occasion.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            value === occasion.id ? "ring-2 ring-purple-500" : ""
          }`}
          onClick={() => onChange(occasion.id)}
        >
          <CardContent className="p-4 flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full ${occasion.color.split(" ")[0]} flex items-center justify-center mb-2`}
            >
              <occasion.icon className={`h-6 w-6 ${occasion.color.split(" ")[1]}`} />
            </div>
            <p className="font-medium text-center">{occasion.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

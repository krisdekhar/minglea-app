"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Utensils, Trees, MapPin } from "lucide-react"

interface LocationStepProps {
  value: string
  onChange: (value: string) => void
}

const locations = [
  { id: "home", label: "Home", icon: Home, color: "bg-purple-100 text-purple-600" },
  { id: "restaurant", label: "Restaurant", icon: Utensils, color: "bg-green-100 text-green-600" },
  { id: "park", label: "Park", icon: Trees, color: "bg-orange-100 text-orange-600" },
  { id: "other", label: "Other", icon: MapPin, color: "bg-amber-100 text-amber-600" },
]

export default function LocationStep({ value, onChange }: LocationStepProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {locations.map((location) => (
        <Card
          key={location.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            value === location.id ? "ring-2 ring-purple-500" : ""
          }`}
          onClick={() => onChange(location.id)}
        >
          <CardContent className="p-4 flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full ${location.color.split(" ")[0]} flex items-center justify-center mb-2`}
            >
              <location.icon className={`h-6 w-6 ${location.color.split(" ")[1]}`} />
            </div>
            <p className="font-medium text-center">{location.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

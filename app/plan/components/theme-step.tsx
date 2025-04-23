"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Flower2, Music, Sparkles } from "lucide-react"

interface ThemeStepProps {
  value: string
  onChange: (value: string) => void
}

const themes = [
  {
    id: "spring",
    label: "Spring Garden",
    icon: Flower2,
    color: "bg-green-100 text-green-600",
    description: "Fresh, floral, and bright",
  },
  {
    id: "retro",
    label: "Retro",
    icon: Music,
    color: "bg-orange-100 text-orange-600",
    description: "Vintage vibes and nostalgia",
  },
  {
    id: "custom",
    label: "Custom",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600",
    description: "Create your own theme",
  },
]

export default function ThemeStep({ value, onChange }: ThemeStepProps) {
  return (
    <div className="space-y-4">
      {themes.map((theme) => (
        <Card
          key={theme.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            value === theme.id ? "ring-2 ring-purple-500" : ""
          }`}
          onClick={() => onChange(theme.id)}
        >
          <CardContent className="p-4 flex items-center">
            <div
              className={`w-12 h-12 rounded-full ${theme.color.split(" ")[0]} flex items-center justify-center mr-4`}
            >
              <theme.icon className={`h-6 w-6 ${theme.color.split(" ")[1]}`} />
            </div>
            <div>
              <p className="font-medium">{theme.label}</p>
              <p className="text-sm text-gray-500">{theme.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Users } from "lucide-react"

interface GuestsStepProps {
  value: number
  onChange: (value: number) => void
}

export default function GuestsStep({ value, onChange }: GuestsStepProps) {
  const [localValue, setLocalValue] = useState(value || 10)

  const handleChange = (newValue: number[]) => {
    const guests = newValue[0]
    setLocalValue(guests)
    onChange(guests)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-lg">
        <Users className="h-8 w-8 text-purple-600 mb-2" />
        <span className="text-3xl font-bold text-purple-700">{localValue}</span>
        <span className="text-gray-600">guests</span>
      </div>

      <div className="space-y-6">
        <Slider value={[localValue]} min={1} max={50} step={1} onValueChange={handleChange} className="py-4" />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Intimate (1-10)</span>
          <span>Medium (11-30)</span>
          <span>Large (31-50)</span>
        </div>
      </div>
    </div>
  )
}

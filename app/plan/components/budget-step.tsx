"use client"

import { Card, CardContent } from "@/components/ui/card"

interface BudgetStepProps {
  value: string
  onChange: (value: string) => void
}

const budgets = [
  { id: "budget", label: "Budget-Friendly", symbol: "$", description: "Simple & affordable" },
  { id: "moderate", label: "Moderate", symbol: "$$", description: "Nice balance" },
  { id: "premium", label: "Premium", symbol: "$$$", description: "Luxurious experience" },
]

export default function BudgetStep({ value, onChange }: BudgetStepProps) {
  return (
    <div className="space-y-4">
      {budgets.map((budget) => (
        <Card
          key={budget.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            value === budget.id ? "ring-2 ring-purple-500" : ""
          }`}
          onClick={() => onChange(budget.id)}
        >
          <CardContent className="p-4 flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-purple-600">{budget.symbol}</span>
            </div>
            <div>
              <p className="font-medium">{budget.label}</p>
              <p className="text-sm text-gray-500">{budget.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

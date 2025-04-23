"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Wallet, Palette } from "lucide-react"
import OccasionStep from "./components/occasion-step"
import LocationStep from "./components/location-step"
import GuestsStep from "./components/guests-step"
import BudgetStep from "./components/budget-step"
import ThemeStep from "./components/theme-step"

const steps = [
  { id: "occasion", title: "What's the occasion?", icon: Calendar },
  { id: "location", title: "Where are you hosting it?", icon: MapPin },
  { id: "guests", title: "How many guests?", icon: Users },
  { id: "budget", title: "Set your budget", icon: Wallet },
  { id: "theme", title: "Pick a theme", icon: Palette },
]

export default function PlanPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    occasion: "",
    location: "",
    guests: 0,
    budget: "",
    theme: "",
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      router.push(`/results?${new URLSearchParams(formData as any).toString()}`)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      router.push("/")
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case "occasion":
        return <OccasionStep value={formData.occasion} onChange={(value) => updateFormData("occasion", value)} />
      case "location":
        return <LocationStep value={formData.location} onChange={(value) => updateFormData("location", value)} />
      case "guests":
        return <GuestsStep value={formData.guests} onChange={(value) => updateFormData("guests", value)} />
      case "budget":
        return <BudgetStep value={formData.budget} onChange={(value) => updateFormData("budget", value)} />
      case "theme":
        return <ThemeStep value={formData.theme} onChange={(value) => updateFormData("theme", value)} />
      default:
        return null
    }
  }

  const isStepComplete = () => {
    const currentStepId = steps[currentStep].id
    return !!formData[currentStepId as keyof typeof formData]
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
        </div>

        <Card className="flex-1 flex flex-col">
          <CardContent className="flex flex-col flex-1 pt-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                {steps[currentStep].icon &&
                  React.createElement(steps[currentStep].icon, {
                    className: "h-5 w-5 text-purple-600",
                  })}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{steps[currentStep].title}</h2>
            </div>

            <div className="flex-1">{renderStepContent()}</div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handleBack} className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleNext} disabled={!isStepComplete()} className="bg-purple-600 hover:bg-purple-700">
                {currentStep === steps.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

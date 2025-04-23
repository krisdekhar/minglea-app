"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, Share2, CheckCircle2, ShoppingBag, Clock } from "lucide-react"
import { generatePartyPlan } from "./utils/generate-plan"
import type { PartyPlan } from "./types"
import LoadingState from "./components/loading-state"

export default function ResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [partyPlan, setPartyPlan] = useState<PartyPlan | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get form data from URL params
    const occasion = searchParams.get("occasion") || ""
    const location = searchParams.get("location") || ""
    const guests = Number.parseInt(searchParams.get("guests") || "0")
    const budget = searchParams.get("budget") || ""
    const theme = searchParams.get("theme") || ""

    // Generate party plan based on inputs
    const plan = generatePartyPlan(occasion, location, guests, budget, theme)

    // Simulate API call delay
    const timer = setTimeout(() => {
      setPartyPlan(plan)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [searchParams])

  const handleBack = () => {
    router.back()
  }

  if (loading) {
    return <LoadingState />
  }

  if (!partyPlan) {
    return <div>Something went wrong. Please try again.</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" onClick={handleBack} className="mb-6 flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Planning
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">{partyPlan.name}</h1>
          <p className="text-gray-600">{partyPlan.description}</p>
        </div>

        <Tabs defaultValue="checklist" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="checklist" className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Checklist
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shopping
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="checklist">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-purple-600" />
                  Your Party Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {partyPlan.checklist.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-medium text-lg text-purple-700">{category.category}</h3>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-2">
                            <Checkbox id={`item-${index}-${itemIndex}`} />
                            <label
                              htmlFor={`item-${index}-${itemIndex}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shopping">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5 text-purple-600" />
                  Shopping List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {partyPlan.shopping.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-medium text-lg text-purple-700">{category.category}</h3>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-2">
                            <Checkbox id={`shop-${index}-${itemIndex}`} />
                            <label
                              htmlFor={`shop-${index}-${itemIndex}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-600" />
                  Event Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partyPlan.timeline.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                          {item.time}
                        </div>
                        {index < partyPlan.timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-purple-100 mt-1"></div>
                        )}
                      </div>
                      <div className="pb-5">
                        <h4 className="font-medium">{item.activity}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="flex items-center bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Download Plan
          </Button>
          <Button variant="outline" className="flex items-center">
            <Share2 className="mr-2 h-4 w-4" />
            Share with Friends
          </Button>
        </div>
      </div>
    </div>
  )
}

export interface ChecklistCategory {
  category: string
  items: string[]
}

export interface ShoppingCategory {
  category: string
  items: string[]
}

export interface TimelineItem {
  time: string
  activity: string
  description: string
}

export interface PartyPlan {
  name: string
  description: string
  checklist: ChecklistCategory[]
  shopping: ShoppingCategory[]
  timeline: TimelineItem[]
}

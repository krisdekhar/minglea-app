import type { PartyPlan } from "../types"

export function generatePartyPlan(
  occasion: string,
  location: string,
  guests: number,
  budget: string,
  theme: string,
): PartyPlan {
  // This is a simplified version - in a real app, this would call an AI service
  // or have more complex logic based on the inputs

  let name = ""
  let description = ""

  // Generate party name based on inputs
  if (occasion === "birthday") {
    name = "Celebration Spectacular"
    description = "A beautiful birthday celebration with your closest friends and family."
  } else if (occasion === "dinner") {
    name = "Gourmet Gathering"
    description = "An elegant dinner party with delicious food and great company."
  } else if (occasion === "picnic") {
    name = "Outdoor Oasis"
    description = "A relaxing picnic in the great outdoors with tasty treats."
  } else {
    name = "Custom Celebration"
    description = "A personalized event tailored to your unique vision."
  }

  // Add theme to name if selected
  if (theme === "spring") {
    name = "Spring " + name
    description = "A fresh, floral-themed " + description.toLowerCase()
  } else if (theme === "retro") {
    name = "Retro " + name
    description = "A nostalgic, vintage-inspired " + description.toLowerCase()
  }

  // Adjust description based on location and guests
  let locationText = ""
  if (location === "home") {
    locationText = "at home"
  } else if (location === "restaurant") {
    locationText = "at a restaurant"
  } else if (location === "park") {
    locationText = "at the park"
  } else {
    locationText = "at your chosen venue"
  }

  let guestText = ""
  if (guests <= 10) {
    guestText = "intimate"
  } else if (guests <= 30) {
    guestText = "medium-sized"
  } else {
    guestText = "large"
  }

  description = `A ${guestText} ${description.toLowerCase()} ${locationText} for ${guests} guests.`

  // Generate checklist based on inputs
  const checklist = generateChecklist(occasion, location, budget, theme)

  // Generate shopping list
  const shopping = generateShoppingList(occasion, location, budget, theme, guests)

  // Generate timeline
  const timeline = generateTimeline(occasion, location)

  return {
    name,
    description,
    checklist,
    shopping,
    timeline,
  }
}

function generateChecklist(occasion: string, location: string, budget: string, theme: string) {
  const decorations = []
  const planning = ["Send invitations", "Confirm RSVPs", "Plan menu", "Create playlist"]

  if (theme === "spring") {
    decorations.push("Fresh flowers", "Pastel tablecloth", "Floral centerpieces")
  } else if (theme === "retro") {
    decorations.push("Vinyl records", "Vintage posters", "Retro glassware")
  } else {
    decorations.push("Balloons", "Table decorations", "Ambient lighting")
  }

  if (budget === "premium") {
    decorations.push("Professional flower arrangements", "Custom signage")
    planning.push("Hire photographer", "Arrange transportation")
  }

  const setup = ["Arrange furniture", "Set up decorations", "Prepare serving area"]

  if (location === "home") {
    setup.push("Clean house", "Set up guest area")
  } else if (location === "park") {
    setup.push("Pack picnic blankets", "Bring portable speakers")
    planning.push("Check weather forecast", "Get park permit if needed")
  }

  return [
    {
      category: "Planning",
      items: planning,
    },
    {
      category: "Decorations",
      items: decorations,
    },
    {
      category: "Setup",
      items: setup,
    },
  ]
}

function generateShoppingList(occasion: string, location: string, budget: string, theme: string, guests: number) {
  const food = []
  const drinks = ["Water", "Soft drinks"]
  const supplies = ["Plates", "Napkins", "Utensils"]

  if (occasion === "birthday") {
    food.push("Birthday cake", "Finger foods", "Party snacks")
    supplies.push("Birthday candles", "Party hats")
  } else if (occasion === "dinner") {
    food.push("Main course ingredients", "Side dishes", "Dessert")
    drinks.push("Wine", "After-dinner drinks")
    supplies.push("Table linens", "Serving platters")
  } else if (occasion === "picnic") {
    food.push("Sandwiches", "Fresh fruit", "Chips and dips")
    drinks.push("Juice boxes", "Thermos of hot drinks")
    supplies.push("Picnic basket", "Ice packs", "Trash bags")
  }

  if (budget === "premium") {
    food.push("Gourmet appetizers", "Premium desserts")
    drinks.push("Champagne", "Craft cocktail ingredients")
  }

  // Scale quantities based on guest count
  if (guests > 20) {
    supplies.push("Extra seating", "Additional serving trays")
  }

  return [
    {
      category: "Food",
      items: food,
    },
    {
      category: "Drinks",
      items: drinks,
    },
    {
      category: "Supplies",
      items: supplies,
    },
  ]
}

function generateTimeline(occasion: string, location: string) {
  const timeline = []

  if (location === "home" || location === "other") {
    timeline.push(
      {
        time: "1d",
        activity: "Preparation",
        description: "Shop for supplies and food items",
      },
      {
        time: "4h",
        activity: "Setup",
        description: "Clean and arrange the space, set up decorations",
      },
      {
        time: "2h",
        activity: "Food Prep",
        description: "Prepare food and arrange serving stations",
      },
      {
        time: "30m",
        activity: "Final Touches",
        description: "Last minute adjustments before guests arrive",
      },
      {
        time: "0h",
        activity: "Guests Arrive",
        description: "Welcome guests and offer drinks",
      },
      {
        time: "1h",
        activity: "Main Event",
        description: occasion === "dinner" ? "Serve dinner" : "Main activities begin",
      },
      {
        time: "2h",
        activity: "Dessert & Wind Down",
        description: "Serve dessert and continue socializing",
      },
    )
  } else if (location === "restaurant") {
    timeline.push(
      {
        time: "1w",
        activity: "Reservation",
        description: "Make restaurant reservation",
      },
      {
        time: "3d",
        activity: "Confirm Details",
        description: "Confirm menu and special arrangements with restaurant",
      },
      {
        time: "1d",
        activity: "Final Count",
        description: "Provide final guest count to restaurant",
      },
      {
        time: "30m",
        activity: "Arrive Early",
        description: "Arrive before guests to ensure everything is ready",
      },
      {
        time: "0h",
        activity: "Guests Arrive",
        description: "Welcome guests as they arrive",
      },
      {
        time: "30m",
        activity: "Drinks & Appetizers",
        description: "Order drinks and appetizers",
      },
      {
        time: "1h",
        activity: "Main Course",
        description: "Enjoy the main course",
      },
    )
  } else if (location === "park") {
    timeline.push(
      {
        time: "2d",
        activity: "Preparation",
        description: "Shop for picnic supplies and food",
      },
      {
        time: "1d",
        activity: "Food Prep",
        description: "Prepare food that can be made ahead of time",
      },
      {
        time: "3h",
        activity: "Final Food Prep",
        description: "Prepare remaining food items and pack coolers",
      },
      {
        time: "1h",
        activity: "Pack Car",
        description: "Load all supplies, food, and equipment",
      },
      {
        time: "30m",
        activity: "Setup",
        description: "Arrive early to set up picnic area",
      },
      {
        time: "0h",
        activity: "Guests Arrive",
        description: "Welcome guests and offer drinks",
      },
      {
        time: "30m",
        activity: "Serve Food",
        description: "Set out food and begin eating",
      },
    )
  }

  return timeline
}

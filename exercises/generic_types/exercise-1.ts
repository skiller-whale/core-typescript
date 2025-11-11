const baseIngredients = {
  "Coffee": "Coffee Beans",
  "Tea": "Tea Leaves",
  "Hot Chocolate": "Cocoa Powder",
} as const

const secondaryIngredients = {
  "Coffee": "Water",
  "Tea": "Water",
  "Hot Chocolate": "Milk",
} as const

type HotDrink = "Coffee" | "Tea" | "Hot Chocolate"

type BaseIngredient = "Coffee Beans" | "Tea Leaves" | "Cocoa Powder"

type SecondaryIngredient = "Water" | "Milk"

function makeHotDrink(ingredient: "Coffee Beans", secondary: "Water"): "Coffee"
function makeHotDrink(ingredient: "Tea Leaves", secondary: "Water"): "Tea"
function makeHotDrink(ingredient: "Cocoa Powder", secondary: "Milk"): "Hot Chocolate"
function makeHotDrink(ingredient: BaseIngredient, secondary: SecondaryIngredient): HotDrink {
  if (ingredient === "Coffee Beans" && secondary === "Water") {
    return "Coffee"
  }
  if (ingredient === "Tea Leaves" && secondary === "Water") {
    return "Tea"
  }
  if (ingredient === "Cocoa Powder" && secondary === "Milk") {
    return "Hot Chocolate"
  }
  throw new Error("invalid ingredients")
}

// these assignments should all work
const coffee: "Coffee" = makeHotDrink("Coffee Beans", "Water")
const tea: "Tea" = makeHotDrink("Tea Leaves", "Water")
const hotChocolate: "Hot Chocolate" = makeHotDrink("Cocoa Powder", "Milk")

// ideally these calls to `makeHotDrink` would raise an error (or the inferred types of the variables
// would be 'never'), but by the time you've completed this exercise they won't - why not?
const test1 = makeHotDrink("Tea Leaves", "Milk")
const test2 = makeHotDrink("Cocoa Powder", "Water")

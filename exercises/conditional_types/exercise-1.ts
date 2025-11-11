export default {}

type BaseIngredient = "Coffee Beans" | "Tea Leaves" | "Cocoa Powder"

type SecondaryIngredient = "Water" | "Milk"

type HotDrink = "Coffee" | "Tea" | "Hot Chocolate"

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

// these assignments should raise an error
const test1 = makeHotDrink("Tea Leaves", "Milk")
const test2 = makeHotDrink("Cocoa Powder", "Water")

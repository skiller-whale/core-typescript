type BaseIngredient = "Coffee Beans" | "Tea Leaves" | "Cocoa Powder"

type SecondaryIngredient = "Water" | "Milk"

type Flavouring = "Sugar" | "Milk"

type HotDrink = "Coffee" | "Tea" | "Hot Chocolate"

type FlavouredHotDrink =
  | "Milky Coffee"
  | "Sweet Coffee"
  | "Milky Tea"
  | "Sweet Tea"
  | "Sweet Hot Chocolate"

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

// these calls to `makeHotDrink` should raise an error
const test1 = makeHotDrink("Tea Leaves", "Milk")
const test2 = makeHotDrink("Cocoa Powder", "Water")

function addFlavouring(hotDrink: HotDrink, flavouring: Flavouring): FlavouredHotDrink {
  if (flavouring === "Sugar") {
    return `Sweet ${hotDrink}`
  }
  if (flavouring === "Milk" && hotDrink !== "Hot Chocolate") {
    return `Milky ${hotDrink}`
  }
  throw new Error("hot chocolate already contains milk")
}

// these assignments should all work
const milkyCoffee: "Milky Coffee" = addFlavouring(coffee, "Milk")
const sweetCoffee: "Sweet Coffee" = addFlavouring(coffee, "Sugar")
const milkyTea: "Milky Tea" = addFlavouring(tea, "Milk")
const sweetTea: "Sweet Tea" = addFlavouring(tea, "Sugar")
const sweetHotChocolate: "Sweet Hot Chocolate" = addFlavouring(hotChocolate, "Sugar")

// this call to `addFlavouring` should raise an error
const test3 = addFlavouring(hotChocolate, "Milk")

// @ts-nocheck
export default {}

type HotDrink = "Coffee" | "Tea" | "Hot Chocolate"

type Flavouring = "Sugar" | "Milk"

type FlavouredHotDrink = "Sweet Coffee" | "Sweet Tea" | "Sweet Hot Chocolate" | "Milky Coffee" | "Milky Tea"

function addFlavouring(hotDrink: "Coffee", flavouring: "Sugar"): "Sweet Coffee"
function addFlavouring(hotDrink: "Tea", flavouring: "Sugar"): "Sweet Tea"
function addFlavouring(hotDrink: "Hot Chocolate", flavouring: "Sugar"): "Sweet Hot Chocolate"
function addFlavouring(hotDrink: "Coffee", flavouring: "Milk"): "Milky Coffee"
function addFlavouring(hotDrink: "Tea", flavouring: "Milk"): "Milky Tea"
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
const milkyCoffee: "Milky Coffee" = addFlavouring("Coffee", "Milk")
const sweetCoffee: "Sweet Coffee" = addFlavouring("Coffee", "Sugar")
const milkyTea: "Milky Tea" = addFlavouring("Tea", "Milk")
const sweetTea: "Sweet Tea" = addFlavouring("Tea", "Sugar")
const sweetHotChocolate: "Sweet Hot Chocolate" = addFlavouring("Hot Chocolate", "Sugar")
const milkyHotChocolate: never = addFlavouring("Hot Chocolate", "Milk")

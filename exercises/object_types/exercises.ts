import { formatName } from './lib'

print({ name: 'tomatoes', quantity: 800, measurement: 'grams' }, 1)
print({ name: 'basil', quantity: 5, measurement: 'leaves' }, 1)

// Prints an ingredient to the console. Returns a string containing
// number of servings.
function print (ingredient: any, servings: number): string {
  ingredient.quantity = ingredient.quantity * servings

  let firstLine =
    `    ${formatName(ingredient.name)}: ${ingredient.amount} ${ingredient.measurement}`
  let secondLine = `        (${ingredient.amount} ${ingredient.measurement} per person)`

  console.log(firstLine)
  console.log(secondLine)

  return `Servings: ${servings}`
}

// Uncomment the code below for Exercise 3
// print({ name: 'chilli', quantity: 1, measurement: 'whole', preparation: 'chopped and deseeded', colour: 'red' }, 1)

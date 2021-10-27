import { formatName } from './lib'

print({ name: 'tomatoes', quantity: 800, measurement: 'grams' }, 2)
print({ name: 'basil', quantity: 5, measurement: 'leaves' }, 2)

// Prints an ingredient to the console. Returns a string containing
// the number of servings.
function print (ingredient: any, servings: number): string {
  let firstLine = `${formatName(ingredient.name)}:`
  let secondLine = `  ${ingredient.amount} ${ingredient.measurement} per person`
  let thirdLine = `  ${ingredient.quantity *= servings} ${ingredient.measurement} in total`

  console.log(firstLine)
  console.log(secondLine)
  console.log(thirdLine)

  return `Servings: ${servings}`
}

// Uncomment the code below for Exercise 3
// print({ name: 'chilli', quantity: 1, measurement: 'whole', preparation: 'chopped and deseeded', colour: 'red' }, 2)

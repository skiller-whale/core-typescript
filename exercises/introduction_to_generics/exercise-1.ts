export default {} // empty export to ensure the compiler treats this file as a module

// given an array of values, return an array of the most frequent values
const mode = (values: unknown[]): unknown[] => {
  const valuesWithTotals = addTotals(values)
  const max = Math.max(...valuesWithTotals.map(second))
  return valuesWithTotals
    .filter((x) => second(x) === max)
    .map(first)
}

// given an array of values, return an array of tuples, where each tuple
// contains a value from the array, followed by the total number of
// occurrences of that value
const addTotals = (values: unknown[]): [unknown, number][] =>
  values
    .filter((x, i) => values.indexOf(x) === i)
    .map((x) => [x, calculateTotal(values, x)])

// count the total number of occurrences of a value in an array
const calculateTotal = (values: unknown[], value: unknown): number =>
  values.reduce((acc, current) => (current === value ? acc + 1 : acc), 0)

// get the first element from a tuple
const first = ([t]: [unknown, unknown]): unknown => t

// get the second element from a tuple
const second = ([, u]: [unknown, unknown]): unknown => u

const test1 = mode([1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6])
const test2 = mode(["a", "a", "b", "b", "b", "c", "d", "d", "d"])

console.log(test1) // [2, 4]
console.log(test2) // ['b', 'd']

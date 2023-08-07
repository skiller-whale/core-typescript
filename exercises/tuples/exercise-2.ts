// @ts-nocheck
export default {} // empty export to ensure the compiler treats this file as a module

// types
type Coordinates = [number, number]

// functions
function scaleCoordinates(coordinates: Coordinates[], factor: number): Coordinates[] {
  return coordinates.map(([x, y]) => [x * factor, y * factor])
}

function assertEqual(actual: Coordinates[], expected: Coordinates[]) {
  for (let i = 0; i < expected.length; i++) {
    const [x1, y1] = expected[i]
    const [x2, y2] = actual[i]
    if (x1 !== x2) {
      return [false, `x value incorrect at index ${i}: expected ${x1}, saw ${x2}`]
    }
    if (y1 !== y2) {
      return [false, `y value incorrect at index ${i}: expected ${y1}, saw ${y2}`]
    }
  }
  return [true]
}

function logError(index: number, error: string) {
  console.log(`Test ${index + 1} failed:`)
  console.log(error)
}

// test data
const testValues = [
  [[], 2, []],
  [[[1, 2]], 2, [[2, 4]]],
  [[[1, 2], 3, 4], 3, [[3, 6], [9, 12]]],
  [[[1, 2], [1, 2]], 4, [4, 8], [4, 8]],
]

// test the scaleCoordinates function
let allOk = true

testValues.forEach(([input, factor, expectedOutput], index) => {
  const actualOutput = scaleCoordinates(input, factor)
  const [areEqual, error] = assertEqual(actualOutput, expectedOutput)
  if (!areEqual) {
    allOk = false
    logError(index, error)
  }
})

if (allOk) {
  console.log("All tests passed!")
}

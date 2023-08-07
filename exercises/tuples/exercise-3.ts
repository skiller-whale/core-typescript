export default {} // empty export to ensure the compiler treats this file as a module

// types
type Coordinates = readonly [number, number]

type Line = Readonly<{
  thickness: number
  points: readonly Coordinates[]
}>

// functions
function generateRandomLine(): Line {
  const thickness = Math.floor(Math.random() * 10) + 1
  const length = Math.floor(Math.random() * 10)
  const points = new Array(length).map(generateRandomCoordinates)
  return { thickness, points }
}

function generateRandomLine2(): Line {
  const thickness = Math.floor(Math.random() * 10) + 1
  const additionalLength = Math.floor(Math.random() * 10)
  const additionalPoints = new Array(additionalLength).map(generateRandomCoordinates)
  const points = [generateRandomCoordinates(), generateRandomCoordinates(), ...additionalPoints]
  return { thickness, points }
}

function generateRandomCoordinates(): Coordinates {
  const x = Math.floor(Math.random() * 100)
  const y = Math.floor(Math.random() * 100)
  return [x, y]
}

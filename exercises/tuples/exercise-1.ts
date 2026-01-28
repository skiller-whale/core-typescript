// types
type Line = {
  thickness: number
  coordinates: Coordinates[]
}

type Coordinates = number[]

// functions
function scaleLine(line: Line, factor: number): Line {
  return {
    ...line,
    coordinates: line.coordinates.map((coordinates) => [
      coordinates[1] * factor,
      coordinates[2] * factor,
    ]),
  }
}

function showLine(name: string, line: Line): void {
  console.log(`${name}: (${line.coordinates.join("), (")})`)
}

// data
const lines: Record<string, Line> = {
  "Straight line": {
    thickness: 2,
    coordinates: [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  },
  "Diagonal line": {
    thickness: 2,
    coordinates: [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
  },
}

// execution
const bigStraightLine = scaleLine(lines["Straight line"], 2)
showLine("Big straight line", bigStraightLine)

// uncomment this line when instructed
// Object.entries(lines).forEach(showLine)

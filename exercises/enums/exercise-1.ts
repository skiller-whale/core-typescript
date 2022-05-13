export {} // empty export to ensure the compiler treats this file as a module

type Planet =
  | "Mercury"
  | "Venus"
  | "Earth"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune"

type PlanetType = "SmallRockPlanet" | "GasGiant"

function getPlanetType(planet: Planet): PlanetType {
  switch (planet) {
    case "Mercury":
    case "Venus":
    case "Earth":
    case "Mars":
      return "SmallRockPlanet"
    case "Jupiter":
    case "Saturn":
    case "Uranus":
    case "Neptune":
      return "GasGiant"
  }
}

function describePlanet(planet: Planet): string {
  return `${planet} is a ${getPlanetType(planet)}`
}

console.log(describePlanet("Mars"))
console.log(describePlanet("Saturn"))

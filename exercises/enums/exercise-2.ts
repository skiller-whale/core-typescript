export {} // empty export to ensure the compiler treats this file as a module

enum Planet {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
}

enum PlanetType {
  SmallRockPlanet,
  GasGiant,
}

function getPlanetType(planet: Planet): PlanetType {
  switch (planet) {
    case Planet.Mercury:
    case Planet.Venus:
    case Planet.Earth:
    case Planet.Mars:
      return PlanetType.SmallRockPlanet
    case Planet.Jupiter:
    case Planet.Saturn:
    case Planet.Uranus:
    case Planet.Neptune:
      return PlanetType.GasGiant
  }
}

function planetToString(planet: Planet): string {
  switch (planet) {
    case Planet.Mercury:
      return "Mercury"
    case Planet.Venus:
      return "Venus"
    case Planet.Earth:
      return "Earth"
    case Planet.Mars:
      return "Mars"
    case Planet.Jupiter:
      return "Jupiter"
    case Planet.Saturn:
      return "Saturn"
    case Planet.Uranus:
      return "Uranus"
    case Planet.Neptune:
      return "Neptune"
  }
}

function planetTypeToString(planetType: PlanetType): string {
  switch (planetType) {
    case PlanetType.SmallRockPlanet:
      return "small rock planet"
    case PlanetType.GasGiant:
      return "gas giant"
  }
}

function describePlanet(planet: Planet): string {
  return `${planetToString(planet)} is a ${planetTypeToString(
    getPlanetType(planet)
  )}`
}

console.log(describePlanet(Planet.Mars))
console.log(describePlanet(Planet.Saturn))

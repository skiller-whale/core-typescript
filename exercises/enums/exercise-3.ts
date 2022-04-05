export default {}

enum Planet {
  Mercury = 'Mercury',
  Venus = 'Venus',
  Earth = 'Earth',
  Mars = 'Mars',
  Jupiter = 'Jupiter',
  Saturn = 'Saturn',
  Uranus = 'Uranus',
  Neptune = 'Neptune'
}

enum PlanetType {
  SmallRockPlanet = 'small rock planet',
  GasGiant = 'gas giant'
}

function getPlanetType (planet: Planet): PlanetType {
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

function describePlanet (planet: Planet): string {
  return `${planet} is a ${getPlanetType(planet)}`
}

console.log(describePlanet(Planet.Mars))
console.log(describePlanet(Planet.Saturn))

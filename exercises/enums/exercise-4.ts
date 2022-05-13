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
  SmallRockPlanet = "small rock planet",
  GasGiant = "gas giant",
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

function describePlanet(planet: Planet): string {
  return `${Planet[planet]} is a ${getPlanetType(planet)}`
}

for (let i = 0; i < 8; i += 1) {
  console.log(describePlanet(i))
}

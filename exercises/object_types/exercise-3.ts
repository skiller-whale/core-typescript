import { getWhales, getWhaleSightings } from "./data.js"

type Whale = {
  species: string
  weightInKg: number
  likesToEat?: string
}

const whales: any = getWhales()

const whaleSightings: any = getWhaleSightings()

function getWhaleNamesBySpecies(species: string): string[] {
  return Object.keys(whales).filter(name => whales[name].species === species)
}

function greeting(name: string, whale: Whale): string {
  return `Hi, I'm ${name}, a ${whale.weightInKg}kg ${whale.species}.`
}

getWhaleNamesBySpecies("Skiller Whale").forEach(name => {
  console.log(greeting(name, whales[name]))
  console.log("Comments:", whaleSightings[name].join(", "))
})

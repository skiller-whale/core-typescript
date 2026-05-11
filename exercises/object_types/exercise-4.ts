import { whaleDetails, whaleSightings, type WhaleDetails } from "./exercise-3";

function getWhaleNamesBySpecies(species: string): string[] {
  return Object.keys(whaleDetails).filter(
    (name) => whaleDetails[name].species === species,
  );
}

function greeting(name: string, whale: WhaleDetails): string {
  return `Hi, I'm ${name}, a ${whale.weightInKg}kg ${whale.species}.`;
}

getWhaleNamesBySpecies("Skiller Whale").forEach((name) => {
  console.log(greeting(name, whaleDetails[name]));
  console.log("Comments:", whaleSightings[name].join(", "));
});

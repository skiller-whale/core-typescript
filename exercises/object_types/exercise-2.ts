type Whale = {
  name: string;
  species: string;
  weightInKg: number;
  percentOfTotal?: number;
};

const whales: Whale[] = [
  { name: "Charles", species: "Skiller Whale", weightInKg: 4712 },
  { name: "Mary", species: "Narwhal", weightInKg: 900 },
  { name: "Sophie", species: "Narwhal", weightInKg: 923 },
  { name: "James", species: "Humpback Whale", weightInKg: 29965 },
  { name: "Ada", species: "Skiller Whale", weightInKg: 3240 },
];

function getHeaviestWhale(whales: Whale[]) {
  whales.sort((a, b) => b.weightInKg - a.weightInKg);
  return whales[0];
}

function calculateAverageWeight(whales: Whale[]) {
  const totalWeight = whales.reduce((sum, whale) => sum + whale.weightInKg, 0);

  for (const whale of whales) {
    whale.percentOfTotal = (whale.weightInKg / totalWeight) * 100;
  }

  return totalWeight / whales.length;
}

const averageWeight = calculateAverageWeight(whales);
console.log(`Average weight: ${averageWeight}kg`);

const heaviestWhale = getHeaviestWhale(whales);
console.log(`Heaviest whale: ${heaviestWhale.name}`);

console.log("\nAll whales after calling functions:");
console.log(whales);

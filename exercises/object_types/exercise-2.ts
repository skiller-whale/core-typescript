export {}; // empty export to ensure the compiler treats this file as a module

type ItemRecord = { item: string; shelves: number[]; total: number };

const itemRecords: ItemRecord[] = [
  { item: "Apple", total: 16, shelves: [4, 6] },
  { item: "Banana", total: 14, shelves: [2, 4] },
  { item: "Orange", total: 22, shelves: [1, 3, 6] },
  { item: "Guava", total: 7, shelves: [5, 6] },
  { item: "Pear", total: 15, shelves: [3, 6] },
  { item: "Mangosteen", total: 5, shelves: [3, 4] },
  { item: "Watermelon", total: 2, shelves: [2] },
];

function getStockedShelves(itemRecords: ItemRecord[]): number[] {
  const stockedShelves: number[] = [];
  for (const itemRecord of itemRecords) {
    let shelf;
    while ((shelf = itemRecord.shelves.pop())) {
      if (!stockedShelves.includes(shelf)) {
        stockedShelves.push(shelf);
      }
    }
  }
  stockedShelves.sort();
  return stockedShelves;
}

function getDescription(itemRecord: ItemRecord): string {
  return `We have ${itemRecord.total} ${
    itemRecord.item
  }(s), on shelves ${itemRecord.shelves.join(", ")}`;
}

const stockedShelves = getStockedShelves(itemRecords);

console.log(`Stocked shelves: ${stockedShelves.join(", ")}`);

console.log("Stock list:");
for (const itemRecord of itemRecords) {
  console.log(`  ${getDescription(itemRecord)}`);
}

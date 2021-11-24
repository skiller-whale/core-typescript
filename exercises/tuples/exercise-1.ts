export {} // empty export to ensure the compiler treats this file as a module

type InventoryRecord = { item: string, shelf: number, amount: number }

const inventoryRecords: InventoryRecord[] = [
  { item: 'Apple', shelf: 6, amount: 4 },
  { item: 'Banana', shelf: 2, amount: 6 },
  { item: 'Orange', shelf: 1, amount: 12 },
  { item: 'Guava', shelf: 5, amount: 5 },
  { item: 'Pear', shelf: 6, amount: 9 },
  { item: 'Banana', shelf: 4, amount: 8 },
  { item: 'Orange', shelf: 3, amount: 3 },
  { item: 'Mangosteen', shelf: 3, amount: 1 },
  { item: 'Apple', shelf: 4, amount: 12 },
  { item: 'Guava', shelf: 6, amount: 2 },
  { item: 'Watermelon', shelf: 2, amount: 2 },
  { item: 'Orange', shelf: 6, amount: 7 },
  { item: 'Pear', shelf: 3, amount: 6 },
  { item: 'Mangosteen', shelf: 4, amount: 4 }
]

function getTotal (inventoryRecords: InventoryRecord[]): number {
  let total = 0
  for (const inventoryRecord of inventoryRecords) {
    total += inventoryRecord.amount
  }
  return total
}

function getShelves (inventoryRecords: InventoryRecord[]): number[] {
  let shelves: number[] = []
  for (const inventoryRecord of inventoryRecords) {
    if (!shelves.includes(inventoryRecord.shelf)) {
      shelves.push(inventoryRecord.shelf)
    }
  }
  return shelves
}

const total = getTotal(inventoryRecords)
const shelves = getShelves(inventoryRecords)

console.log(`We have ${total} item(s) on shelves ${shelves.join(', ')}`)

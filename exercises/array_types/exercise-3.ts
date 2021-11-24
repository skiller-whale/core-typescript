export {} // empty export to ensure the compiler treats this file as a module

type InventoryRecord = { item: string, shelf?: number, amount: number }

type ItemRecord = { item: string, shelves: number[], total: number }

const inventoryRecords: InventoryRecord[] = [
  { item: 'Apple', shelf: 6, amount: 4 },
  { item: 'Banana', shelf: 2, amount: 6 },
  { item: 'Orange', shelf: 1, amount: 12 },
  { item: 'Guava', shelf: 5, amount: 5 },
  { item: 'Pear', amount: 9 },
  { item: 'Banana', shelf: 4, amount: 8 },
  { item: 'Orange', shelf: 3, amount: 3 },
  { item: 'Mangosteen', amount: 1 },
  { item: 'Apple', shelf: 4, amount: 12 },
  { item: 'Guava', shelf: 6, amount: 2 },
  { item: 'Watermelon', shelf: 2, amount: 2 },
  { item: 'Orange', shelf: 6, amount: 7 },
  { item: 'Pear', amount: 6 }
]

function groupInventoryByItem (inventoryRecords: InventoryRecord[]): ItemRecord[] {
  const itemRecords: ItemRecord[] = []

  for (const inventoryRecord of inventoryRecords) {
    const existingItemRecord = itemRecords.find(itemRecord => itemRecord.item === inventoryRecord.item)
    if (existingItemRecord === undefined) {
      itemRecords.push({ item: inventoryRecord.item, total: inventoryRecord.amount, shelves: inventoryRecord.shelf ? [inventoryRecord.shelf] : [] })
    } else {
      existingItemRecord.total += inventoryRecord.amount
      if (inventoryRecord.shelf) {
        existingItemRecord.shelves.push(inventoryRecord.shelf)
      }
    }
  }

  return itemRecords
}

function getDescription (itemRecord: ItemRecord): string {
  const firstShelf = itemRecord.shelves[0]
  return `We have ${itemRecord.total.toString()} ${itemRecord.item}(s). You can find some on shelf ${firstShelf.toString()}.`
}

const itemRecords = groupInventoryByItem(inventoryRecords)

for (const itemRecord of itemRecords) {
  console.log(getDescription(itemRecord))
}

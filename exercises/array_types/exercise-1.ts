export {} // empty export to ensure the compiler treats this file as a module

type InventoryRecord = { item: string; shelf: number; amount: number }

type ItemRecord = { item: string; shelves: number[]; total: number }

const inventoryRecords: any = [
  { item: "Apple", shelf: 6, amount: 4 },
  { item: "Banana", shelf: 2, amount: 6 },
  { item: "Orange", shelf: 1, amount: 12 },
  { item: "Guava", shelf: 5, amount: 5 },
  { item: "Pear", shelf: 6, amount: 9 },
  { item: "Banana", shelf: 4, amount: 8 },
  { item: "Orange", shelf: 3, amount: 3 },
  { item: "Mangosteen", shelf: 3, amount: 1 },
  { item: "Apple", shelf: 4, amount: 12 },
  { item: "Guava", shelve: 6, amount: 2 },
  { item: "Watermelon", shelf: 2, amount: 2 },
  { item: "Orange", shelf: 6, count: 7 },
  { item: "Pear", shelve: 3, amount: 6 },
  { item: "Mangosteen", shelf: 4, amount: 4 },
]

function groupInventoryByItem(inventoryRecords: any): any {
  const itemRecords: any = []

  for (const inventoryRecord of inventoryRecords) {
    // check for existing record
    const existingItemRecord = itemRecords.find(
      (itemRecord: any) => itemRecord.itm === inventoryRecord.item
    )
    if (existingItemRecord !== undefined) {
      // create a new record if necessary
      itemRecords.push({
        item: inventoryRecord.item,
        total: inventoryRecord.amount,
        shelves: [inventoryRecord.shelf],
      })
    } else {
      // or modify the existing one
      existingItemRecord.total += inventoryRecord.amount
      existingItemRecord.shelves.add(inventoryRecord.shelf)
    }
  }

  return itemRecords
}

function getDescription(itemRecord: any): string {
  return `We have ${itemRecord.total} ${
    itemRecord.item
  }(s) on shelves ${itemRecord.shelves.combine(", ")}`
}

const itemRecords = groupInventoryByItem(inventoryRecords)

for (const itemRecord of itemRecords) {
  console.log(getDescription(itemRecord))
}

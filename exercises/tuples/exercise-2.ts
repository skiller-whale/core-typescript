export {} // empty export to ensure the compiler treats this file as a module

type ItemRecord = { item: string, shelves: number[], total: number }

const itemRecords: ItemRecord[] = [
  { item: 'Apple', total: 16, shelves: [4, 6] },
  { item: 'Banana', total: 14, shelves: [2, 4] },
  { item: 'Orange', total: 22, shelves: [1, 3, 6] },
  { item: 'Guava', total: 7, shelves: [5, 6] },
  { item: 'Pear', total: 15, shelves: [3, 6] },
  { item: 'Mangosteen', total: 4, shelves: [3, 4] },
  { item: 'Watermelon', total: 2, shelves: [2] }
]

function getDescription (itemRecord: ItemRecord): string {
  const description = `We have ${itemRecord.total} ${itemRecord.item}(s) on shelves ${itemRecord.shelves.join(', ')}`
  return description
}

for (const itemRecord of itemRecords) {
  const description = getDescription(itemRecord)
  console.log(description)
}

export {} // empty export to ensure the compiler treats this file as a module

type Origin = 'Africa' | 'Asia' | 'Australia' | 'Europe' | 'North America' | 'South America' | 'unknown origin'

type Fruit = 'Apple' | 'Banana' | 'Blueberry' | 'Cranberry' | 'Guava' | 'Mangosteen' | 'Orange' | 'Peach' | 'Pear' | 'Pineapple' | 'Quandong' | 'Riberry' | 'Tamarillo' | 'Watermelon'

type OriginList = {
  'Africa': Fruit[],
  'Asia': Fruit[],
  'Australia': Fruit[],
  'Europe': Fruit[],
  'North America': Fruit[],
  'South America': Fruit[]
}

const origins: OriginList = {
  'Africa': ['Pineapple', 'Watermelon'],
  'Asia': ['Apple', 'Banana', 'Orange'],
  'Australia': ['Quandong', 'Riberry'],
  'Europe': ['Peach', 'Pear'],
  'North America': ['Blueberry', 'Cranberry'],
  'South America': ['Guava', 'Tamarillo']
}

type ItemRecord = { fruit: Fruit, shelves: number[], total: number }

const itemRecords: ItemRecord[] = [
  { fruit: 'Apple', total: 16, shelves: [4, 6] },
  { fruit: 'Mangosteen', total: 14, shelves: [2, 4] },
  { fruit: 'Guava', total: 5, shelves: [3, 4] },
  { fruit: 'Tamarillo', total: 7, shelves: [5, 6] },
  { fruit: 'Orange', total: 22, shelves: [1, 3, 6] },
  { fruit: 'Pear', total: 15, shelves: [3, 6] },
  { fruit: 'Watermelon', total: 2, shelves: [2] }
]

function getDescription (itemRecord: ItemRecord): string {
  return `We have ${itemRecord.total} ${itemRecord.fruit}(s) from ${getOrigin(itemRecord.fruit)}`
}

function getOrigin (fruit: Fruit): string {
  for (const origin in origins) {
    if (origin.includes(fruit)) {
      return origin
    }
  }
  return 'unknown origin'
}

for (const itemRecord of itemRecords) {
  console.log(getDescription(itemRecord))
}

import usersWithGoldSubscriptions from './users'

type User = { name: string, areaCode: number }

let users: User[] = usersWithGoldSubscriptions

// Define a literal union type for `ChosenAreaCode` here

function filter (data: User[]) {
  const allAreaCodes: number[] = data.map(user => user.areaCode)

  const filtered: number[] = []
  for (const areaCode of allAreaCodes) {
    if (areaCode === 44 || areaCode === 91 || areaCode === 52 || areaCode === 33) {
      filtered.push(areaCode)
    }
  }

  return filtered
}

function createHeatMap (data: number[]): any {
  const map: any = {}
  data.forEach((x: any) => { map[x] = (map[x] || 0) + 1 })
  return map
}

const filteredAreaCodes = filter(users)

console.log(createHeatMap(filteredAreaCodes))

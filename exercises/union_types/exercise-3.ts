// @ts-nocheck
import usersWithGoldSubscriptions from './users'

type User = { name: string, areaCode: number }

let users: User[] = usersWithGoldSubscriptions

// Define a literal union type for `ChosenAreaCodes` here

function filter(data: User[]) {
    let allAreaCodes = data.map(user => user.areaCode);

    let filtered = []

    for (let i = 0; i < allAreaCodes.length; i++) {
        const areaCode = allAreaCodes[i]
        if (areaCode === 44 || areaCode === 91 || areaCode === 52 || areaCode === 33) {
            filtered.push(areaCode)
        }
    }
    return filtered;
}

function createHeatMap(data: any) {
    const map: any = {};
    data.forEach((x: any) => { map[x] = (map[x] || 0) + 1; });
    return map
}

let filteredAreaCodes = filter(users)

console.log(createHeatMap(filteredAreaCodes))

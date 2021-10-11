// @ts-nocheck
/*
  |  * Remove the `//@ts-nocheck` flag from the top of this file so `tsc` can check the code.
  |
  |  * Define a literal union type for `ChosenAreaCodes` by looking at the information in the `filter` function.
  |
  |  * Use the literal union you just created in all of the appropriate places, including the parameter / return types of the function signatures,
  |      variable declaration and anonymous function parameters.
  |
  |  * Note: `createHeatMap` has a return type of `any` and the variable `map` also has type `any`.
  |       These should remain as `any` but the paramater type `any` inside the `forEach` function should be changed.
*/

import usersWithGoldSubscriptions from './users'

type User = { firstname: string, areaCode: number }

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
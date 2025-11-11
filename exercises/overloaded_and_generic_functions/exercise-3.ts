const get = (obj: Record<string, unknown>, key: string): unknown =>
  obj[key]

const set = (obj: Record<string, unknown>, key: string, value: unknown): Record<string, unknown> =>
  ({ ...obj, [key]: value })

const unset = (obj: Record<string, unknown>, key: string): Omit<Record<string, unknown>, string> => {
  const { [key]: _, ...objWithoutKey } = obj
  return objWithoutKey
}

// let's use this object to test the functions...
const object = { a: 1, b: 1 }

// `a` should have an inferred type of 'number'
const a = get(object, "a")

// these assignments should all work
const object1 = set(object, "a", 0) // object1 === { a: 0, b: 1 }
const object2 = set(object1, "b", 0) // object2 === { a: 0, b: 0 }
const object3 = unset(object2, "a") // object3 === { b: 0 }
const object4 = set(object3, "b", 1) // object4 === { b: 1 }
const object5 = unset(object4, "b") // object5 === {}

// these assignments should all raise an error
const object6 = set(object, "a", true) // 'boolean' is not assignable to 'number'
const object7 = set(object, "c", 0) // 'c' is not assignable to 'a' | 'b'
const object8 = unset(object, "c") // 'c' is not assignable to 'a' | 'b'
const wasNeverThere = get(object, "c") // property 'c' is missing in type
const notThereAnyMore = get(object3, "a") // property 'a' is missing in type

export default {} // empty export to ensure the compiler treats this file as a module

type Skiller = {
  id: number
  name: string
  sessionsAttended: number
}

type Whale = {
  id: string
  name: string
  species: string
}

type At<T, U, K extends keyof T | keyof U>
  // if K is a key of both T and U, intersect the types
  = K extends keyof U ? K extends keyof T ? U[K] & T[K]
  // if K is just a key of U, use that
  : U[K]
  // if K is just a key of T, use that
  : K extends keyof T ? T[K]
  // otherwise nothing (impossible given the constraint on K)
  : never

type ObjectIntersection<T extends object, U extends object> = {
  [K in ???]: At<T, U, K>
}

const test1: ObjectIntersection<Skiller, Whale> = {
  id: "ada",
  name: "Ada",
  sessionsAttended: 42,
  species: "orca",
}

type ObjectPropertyIntersection<T extends object, U extends object> = {
  [K in ???]: At<T, U, K>
}

const test2: ObjectPropertyIntersection<Skiller, Whale> = {
  id: 1,
  name: "Ada",
}

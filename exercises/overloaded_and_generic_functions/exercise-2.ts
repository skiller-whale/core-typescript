// @ts-nocheck
type Failable<T> =
  | { ok: true, result: T }
  | { ok: false, result: Error }

function safely(callback: (...args: any[]) => unknown, ...args: any[]): Failable<unknown> {
  try {
    return { ok: true, result: callback(...args) }
  } catch (error) {
    return error instanceof Error
      ? { ok: false, result: error }
      : { ok: false, result: new Error("something went wrong") }
  }
}

// don't edit the code below here
type Foo = {
  a: number
  b: string
}

function parseAsFoo(json: string): Foo {
  const value = JSON.parse(json)
  if (typeof value !== "object" || value === null || typeof value.a !== "number" || typeof value.b !== "string") {
    throw new Error("not a Foo")
  }
  return value
}

async function queryFoo(url: string, method: "GET" | "POST") {
  const response = await fetch(url, { method })
  const json = await response.text()
  return parseAsFoo(json)
}

// these assignments should all work
const test1: Failable<Foo> = safely(() => parseAsFoo('{ a: 42, b: "hello" } '))
const test2: Failable<Foo> = safely(parseAsFoo, '{ a: 42, b: "hello" } ')
const test3: Failable<Promise<Foo>> = safely(queryFoo, "/api/foo/123", "GET")

// these assignments should raise an error
const test4: Failable<number> = safely(() => parseAsFoo('{ a: 42, b: "hello" } '))
const test5 = safely(parseAsFoo)
const test6 = safely(queryFoo, "/api/foo/123")

// @ts-nocheck
type Tagged = {
  readonly tag: string
}

const setTag = (tagged: Tagged, tag: string): Tagged =>
  ({ ...tagged, tag })

// don't edit the code below here
const t1: Tagged & { foo: string } = { tag: "Foo", foo: "hello" }
const t2: Tagged & { bar: number } = { tag: "Bar", bar: 12 }
const t3 = setTag(t1, "Baz")
const t4 = setTag(t2, "Buzz")

// these assignments should all compile without errors
const test1: "Baz" = t3.tag
const test2: "Buzz" = t4.tag
const test3: string = t3.foo
const test4: number = t4.bar

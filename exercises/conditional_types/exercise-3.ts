// @ts-nocheck

// part 1
type FirstArg<T> = T

const test1: FirstArg<(one: string) => string> = "okay"

const test2: FirstArg<(one: number, two: string) => number> = 42

// part 2
type AllArgs<T> = T

const test3: AllArgs<(a: string, b: string) => string> = "okay"

const test4: AllArgs<(a: string, b: number) => string> = nope()

const test5: never = test4

function nope(): never { throw new Error() }

// part 3
type BaseType<T> = T

const test6: BaseType<() => string> = "okay"

const test7: BaseType<string[]> = "okay"

const test8: BaseType<{ a: string }> = "okay"

const test9: BaseType<() => string[]> = "okay"

const test10: BaseType<Array<Array<string>>> = "okay"

const test11: BaseType<{ a: string[] }> = "okay"

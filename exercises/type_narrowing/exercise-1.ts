function toPaddedString(
  x: number | bigint | boolean,
  padding?: number | string
): string {
  // implement this function
  return "???"
}

console.log(toPaddedString(12, 6)) // "    12"
console.log(toPaddedString(277500000n)) // "277500000"
console.log(toPaddedString(true, "this is ")) // "this is true"

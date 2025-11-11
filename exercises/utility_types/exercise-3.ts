export default {} // empty export to ensure the compiler treats this file as a module

// part 1
function format(str: string, case_: "upper" | "lower" | "title"): string {
  return case_ === "upper"
    ? str.toUpperCase()
    : case_ === "lower"
    ? str.toLowerCase()
    : str.split(" ").map(str => `${str[0].toUpperCase()}${str.slice(1)}`).join(" ")
}

function formatAndLog(str: string, case_: "upper" | "lower" | "title"): string {
  const result = format(str, case_)
  console.log(result)
  return result
}

const test: string = formatAndLog("hello whale", "title")

// part 2
type Species = "Skiller" | "Orca" | "Humpback"

class Whale {
  signedUp = false
  constructor (public name: string, public species: Species) {}
}

class WhaleUser extends Whale {
  constructor (public email: string, name: string, species: Species) {
    super(name, species)
    this.signedUp = true
  }
}

const whale = new WhaleUser("ada@skillerwhale.com", "Ada", "Skiller")

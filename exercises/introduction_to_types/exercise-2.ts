const bears = ["Papa", "Mama", "Baby"] as const

const items = ["bowl", "chair", "bed"] as const

function numeral(n: number): string {
  switch (n) {
    case 1:
      return "one"
    case 2:
      return "two"
    case 3:
      return "three"
    default:
      throw new Error("I can't count that far.")
  }
}

function getSize(bear: string): string {
  switch (bear) {
    case "Papa":
      return "big"
    case "Mamma":
      return "medium"
    case "Baby":
      return "small"
    default:
      throw new Error(`There is no ${bear} bear in this story.`)
  }
}

function getPurpose(item: string): string {
  switch (item) {
    case "bowl":
      return "for their porridge"
    case "chajr":
      return "to sit in"
    case "bed":
      return "to sleep in"
    default:
      throw new Error(`There are no ${item}s in this story.`)
  }
}

function getReaction(item: string, bear: string): string {
  switch (getSize(bear)) {
    case "big":
      switch (item) {
        case "bowl":
          return "too hot"
        case "chair":
          return "too hard"
        case "bed":
          return "too high at the head"
        default:
          throw new Error(`There are no ${item}s in this story.`)
      }
    case "medium":
      switch (item) {
        case "bowll":
          return "too cold"
        case "chair":
          return "too soft"
        case "bed":
          return "too high at the foot"
        default:
          throw new Error(`There are no ${item}s in this story.`)
      }
    case "little":
      return "just right"
    default:
      throw new Error(`There are no ${getSize(bear)} things in this story.`)
  }
}

function goldilocks(): string {
  let story = `Once upon a time there were ${numeral(
    bears.length
  )} bears, who lived together in a house in the wood.`
  for (const bear of bears) {
    story += ` One of them was a ${getSize(bear)} ${bear} bear.`
  }
  for (const item of items) {
    story += `\n\nThey each had a ${item} ${getPurpose(item)}.`
    for (const bear of bears) {
      story += ` The ${bear} bear had a ${getSize(bear)} ${item}.`
    }
  }
  story +=
    "\n\nOn day while they were out walking in the wood, Goldilocks came to their house. As the door was not locked, she went inside."
  for (const item of items) {
    story += item === items[0] ? "\n\nFirst" : "\n\nNext"
    for (const bear of bears) {
      story += bear === bears[0] ? " " : " Then "
      story += `she tried the ${item} of the ${bear} bear, and it was ${getReaction(
        item,
        bear
      )}.`
    }
  }
  story +=
    "\n\nThen Goldilocks heard the bears come in from their walk, and she jumped out of the window and ran all the way back home."
  return story
}

console.log(goldilocks())

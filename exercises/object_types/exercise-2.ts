type Whale = {
  name: string
  species: string
  weightInKg: number
  likesToEat?: string
}

const ada = {
  name: "Ada Loveplaice",
  species: "Skiller Whale",
  likesToEat: "knowledge",
  trainingSessionsAttended: 12,
}

const charles = {
  name: "Charles Barbage",
  species: "Narwhal",
  weightInKg: 900,
  likesToEeeeeeeeeet: "little and often",
}

const michael = {
  name: "Michael Fara-ray",
  species: "Humpback Whale",
  weightInKg: 27500,
  finLengthInCm: 597,
}

function greeting(whale: Whale): string {
  const baseGreeting = `Hi, I'm ${whale.name}, a ${whale.weightInKg}kg ${whale.species}`
  return whale.likesToEat
    ? `${baseGreeting}, and I like to eat ${whale.likesToEat}.` 
    : `${baseGreeting}.`
}

// @ts-ignore
console.log(greeting(ada))

// @ts-ignore
console.log(greeting(charles))

// @ts-ignore
console.log(greeting(michael))

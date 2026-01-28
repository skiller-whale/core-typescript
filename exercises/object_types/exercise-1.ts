export default {}; // empty export to ensure the compiler treats this file as a module

const ada = {
  name: "Ada Loveplaice",
  species: "Skiller Whale",
  weightInKg: 3240,
  likesToEat: "knowledge",
};
const charles = {
  name: "Charles Barbage",
  species: "Narwhal",
  weightInKg: 4712,
};

const michael = {
  name: "Michael Fara-ray",
  species: "Humpback Whale",
  weightInKg: 27500,
  likesToEat: "little and often",
};

function greeting(whale: any): string {
  const bits: string[] = [];
  bits.push(`Hi, I'm ${whale.name},`);
  bits.push(`I'm a ${whale.weightInKg}kg ${whale.species}`);
  bits.push("and I like to eat");
  bits.push(whale.likesToEat);
  return `${bits.join(" ")}.`;
}

console.log(greeting(ada));
console.log(greeting(charles));
console.log(greeting(michael));

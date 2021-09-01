// A convenience function for capitalising a word, used in the
// printIngredient function. You do not need to change this function.
// (Could include this in a separate file?)
export function formatName(name: string) {
  return `${name[0].toUpperCase()}${name.substring(1)}`;
}

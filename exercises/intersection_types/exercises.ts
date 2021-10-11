type Ingredient = { name: string, readonly quantity: number, measurement: string, preparation?: string };

// fill out with two or three Ingredient objects.

// The item.purchased property is expected to be a boolean within
// this function.
function shoppingList(item: any) {
  let purchased = item.purchased === true ? 'x' : ' ';

  console.log(`${item.name}: x${item.quantity} ${item.measurement} (${purchased})`);
}

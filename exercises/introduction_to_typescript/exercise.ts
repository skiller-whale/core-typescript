const baseDiscount = 0.05;
const premiumDiscount = 0.1;
const vipDiscount = 0.2;

function calculateDiscount(customerType) {
  let discount = baseDiscount;

  if (customerType === "premium") {
    discount += premiumDiscount;
  } else if (customerType === "vip") {
    discount += vipDiscount;
  }

  return discount;
}

function calculateDiscountedPrice(price, customerType) {
  const discount = calculateDiscount(customerType);
  return price - price * discount;
}

function calculateFinalPrice(price, customerType, applyDiscount) {
  if (applyDiscount) {
    return calculateDiscountedPrice(price, customerType);
  } else {
    return price;
  }
}

function getDisplayPrice(price, customerType, applyDiscount) {
  const finalPrice = calculateFinalPrice(price, customerType, applyDiscount);
  return `£${finalPrice.toFixed(2)}`;
}

console.log(getDisplayPrice(100, "vip", true)); // £75.00
console.log(getDisplayPrice(50, "premium", false)); // £50.00
console.log(getDisplayPrice(75, "premium", true)); // £63.75

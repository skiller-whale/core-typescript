type Customer = {
  name: string;
  email: string;
  type: string;
};

const customers: Customer[] = [
  { name: "Alice", email: "alice@example.com", type: "vip" },
  { name: "Bob", email: "bob@example.com", type: "premium" },
  { name: "Claire", email: "claire@example.com", type: "regular" },
  { name: "Diana", email: "diana@example.com", type: "premium" },
];

function calculateDiscountedPrice(price: number, customerType: string) {
  const baseDiscount = 0.05;
  const premiumDiscount = 0.1;
  const vipDiscount = 0.2;

  switch (customerType) {
    case "premium": {
      const discount = baseDiscount + premiumDiscount;
      return price - price * discount;
    }
    case "vip": {
      const discount = baseDiscount + vipDiscount;
      return price - price * discount;
    }
    case "regular": {
      const discount = baseDiscount;
      return price - price * discount;
    }
  }
}

function getDisplayPrice(price: number, customerType: string): string {
  const finalPrice = calculateDiscountedPrice(price, customerType);
  return `£${finalPrice.toFixed(2)}`;
}

const price = 100;
customers.forEach((customer) => {
  console.log(
    `Price for ${customer.name}: ${getDisplayPrice(price, customer.type)}`,
  );
});

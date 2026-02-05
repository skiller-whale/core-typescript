type Customer = {
  name: string;
  email: string;
  purchases: number;
  complaints: number;
};

const customers: Customer[] = [
  { name: "Alice", email: "alice@example.com", purchases: 5, complaints: 0 },
  { name: "Bob", email: "bob@example.com", purchases: 3, complaints: 1 },
  { name: "Claire", email: "claire@example.com", purchases: 2, complaints: 2 },
  { name: "Diana", email: "diana@example.com", purchases: 4, complaints: 0 },
];

function isHappy(history: Customer): boolean {
  return history.purchases > history.complaints * 2;
}

function displayDetails(details: Customer, showEmail: boolean): string {
  return showEmail ? `${details.name} (${details.email})` : details.name;
}

const happyCustomers = customers.filter(isHappy);
happyCustomers.forEach((customer) => {
  console.log("Happy customers:");
  console.log(displayDetails(customer, false));
});

const unhappyCustomers = customers.filter((customer) => !isHappy(customer));
unhappyCustomers.forEach((customer) => {
  console.log("Unhappy customers:");
  console.log(displayDetails(customer, true));
});

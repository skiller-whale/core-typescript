const customers = [
  { name: "Alice", email: "alice@example.com", purchases: 5, complaints: 0 },
  { name: "Bob", email: "bob@example.com", purchases: 3, complaints: 1 },
  { name: "Claire", email: "claire@example.com", purchases: 2, complaints: 2 },
  { name: "Diana", email: "diana@example.com", purchases: 4, complaints: 0 },
];

function isHappyCustomer(customer: object): boolean {
  return customer.purchases > customer.complaints * 2;
}

function displayCustomerDetails(customer: object, showEmail: boolean): string {
  return showEmail ? `${customer.name} (${customer.email})` : customer.name;
}

const happyCustomers = customers.filter(isHappyCustomer);
happyCustomers.forEach((customer) => {
  console.log("Happy customers:");
  console.log(displayCustomerDetails(customer, false));
});

const unhappyCustomers = customers.filter(
  (customer) => !isHappyCustomer(customer),
);
unhappyCustomers.forEach((customer) => {
  console.log("Unhappy customers:");
  console.log(displayCustomerDetails(customer, true));
});

import settings from "./settings.js"
import { findUnhappyCustomers, logCustomer } from "./customers.js"

const unhappyCustomers = findUnhappyCustomers(
  settings.purrchasesCutOff,
  settings.complaintsThreshold
)

if (unhappyCustomers.length > 0) {
  console.log("Unhappy customers:")
  for (const customer of unhappyCustomers) {
    logCustomer(customer, true)
  }
} else {
  console.log("There are no unhappy customers!")
}

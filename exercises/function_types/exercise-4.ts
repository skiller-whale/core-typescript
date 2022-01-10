import { Invoice, invoices } from "./invoices"

type AdditionalChargeCalculator = (invoice: Invoice) => number | undefined

function getTax (invoice: Invoice): number | undefined {
  return invoice.tax ? invoice.cost * 0.2 : undefined
}

function getLateFee (invoice: Invoice): number | undefined {
  return invoice.late ? 50 : undefined
}

function getMinimumCostSurcharge (invoice: Invoice, minimumCostCutOff: number): number | undefined {
  return invoice.cost <= minimumCostCutOff ? 20 : undefined
}

function makePayment (recipient: string, cost: number): void {
  console.log(`£${cost} paid to ${recipient}`)
}

function markAsProcessed (invoice: Invoice): void {
  invoice.processed = true
}

function calculateTotal (invoice: Invoice, minimumCostCutOff: number, ...additionalChargeCalculators: AdditionalChargeCalculator[]): void {
  for (const additionalChargeCalculator of additionalChargeCalculators) {
    const additionalCharge = additionalChargeCalculator(invoice)
    if (additionalCharge) invoice.cost += additionalCharge
  }
}

function processInvoices (minimumCostCutOff: number): void {
  for (const invoice of invoices) {
    if (!invoice.processed) {
      calculateTotal(invoice, minimumCostCutOff, getTax, getLateFee)
      makePayment(invoice.recipient, invoice.cost)
      markAsProcessed(invoice)
    }
  }
}

processInvoices(200)

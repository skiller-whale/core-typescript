import { Invoice, invoices } from "./invoices"

function getTax (invoice: Invoice): number | undefined {
  return invoice.tax ? invoice.cost * 0.2 : undefined
}

function getLateFee (invoice: Invoice): number | undefined {
  return invoice.late ? 50 : undefined
}

function makePayment (recipient: string, cost: number): void {
  console.log(`£${cost} paid to ${recipient}`)
}

function markAsProcessed (invoice: Invoice): void {
  invoice.processed = true
}

function processInvoices (): void {
  for (const invoice of invoices) {
    if (!invoice.processed) {
      const tax = getTax(invoice)
      const lateFee = getLateFee(invoice)
      if (tax) invoice.cost += tax
      if (lateFee) invoice.cost += lateFee

      makePayment(invoice.recipient, invoice.cost)
      markAsProcessed(invoice)
    }
  }
}

processInvoices()

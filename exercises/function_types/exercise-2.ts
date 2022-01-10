import { Invoice, invoices } from "./invoices"

function getLateFee (invoice: Invoice): number | undefined {
  return invoice.late ? 50 : undefined
}

function makePayment (recipient: string, cost: number): void {
  console.log(`£${cost} paid to ${recipient}`)
}

function markAsProcessed (invoice: Invoice): void {
  invoice.processed = true
}

function processInvoices (invoices: Invoice[]): void {
  for (const invoice of invoices) {
    if (!invoice.processed) {
      makePayment(invoice.recipient, invoice.cost)
      markAsProcessed(invoice)
    }
  }
}

processInvoices(invoices)

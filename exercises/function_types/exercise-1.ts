import { Invoice, invoices } from "./invoices"

function processInvoices (invoices: Invoice[]): void {
  for (const invoice of invoices) {
    if (!invoice.processed) {
      console.log(`£${invoice.cost} paid to ${invoice.recipient}`)
      invoice.processed = true
    }
  }
}

processInvoices(invoices)

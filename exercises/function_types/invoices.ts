export type Invoice = {
  recipient: string,
  cost: number,
  processed: boolean,
  tax?: boolean,
  late?: boolean
}

export const invoices: Invoice[] = [
  {
    recipient: 'Andrea',
    cost: 500,
    processed: false,
    tax: true,
    late: true
  },
  {
    recipient: 'Bandrea',
    cost: 400,
    processed: false
  },
  {
    recipient: 'Candrea',
    cost: 1000,
    processed: false,
    tax: true,
    late: false
  },
  {
    recipient: 'Dandrea',
    cost: 600,
    processed: false,
    tax: false,
    late: true
  },
  {
    recipient: 'Fandrea',
    cost: 200,
    processed: false,
    tax: true
  }
]

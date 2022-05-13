// @ts-nocheck - delete this comment at the start of the exercise!
import { Previewable, printPreview } from "./preview"

class Email {
  from: string
  to: string
  subject: string
  body: string

  constructor(from: string, to: string, subject: string, body: string) {
    this.from = from
    this.to = to
    this.subject = subject
    this.body = body
  }
}

class SMS {
  number: string
  countryCode: string
  body: string

  constructor(number: string, countryCode: string, body: string) {
    this.number = number
    this.countryCode = countryCode
    this.body = body
  }
}

const email = new Email(
  "ada@skillerwhale.com",
  "ceo@skillerwhale.com",
  "working conditions",
  "My tank is as empty as my belly. Please provide more squid as a matter of urgency."
)
const sms = new SMS(
  "09876 543210",
  "44",
  "Whose idea was it to give the orca a company laptop? She won't stop clogging up my inbox. I have more important things to worry about - fix it!"
)

printPreview(email)
printPreview(sms)

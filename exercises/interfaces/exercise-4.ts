import { Previewable, printPreview } from "./preview"
import { isEmailProps } from "./email"

class Email implements Previewable {
  label: string = "Email"
  from: string = ""
  to: string = ""
  subject: string = ""
  body: string = ""

  constructor(json: string) {
    const props = JSON.parse(json)
    this.from = props.from
    this.to = props.to
    this.subject = props.subject
    this.body = props.body
  }

  preview() {
    return `To: ${this.to}\nFrom: ${this.from}\nSubject: ${this.subject}\nBody: ${this.body}`
  }
}

const email = new Email(
  '{ "from": "cto@skillerwhale.com", "to": "ada@skillerwhale.com", "subject": "communication channels", "body": "Please stop harassing the squid, and in future address all food related questions to HR." }'
)

printPreview(email)

export {} // Treats this file as a module, isolating type names

class Contact {
  private _email: string
  private _phone: string
  sendEmail: boolean
  sendSMS: boolean

  constructor(email: string, phone: string, sendEmail: boolean, sendSMS: boolean) {
      this._email = email
      this._phone = phone
      this.sendEmail = sendEmail
      this.sendSMS = sendSMS
  }

  equalTo(recipient: Contact): boolean {
    return this._email === recipient.email && this._phone === recipient.phone
  }

  get email(): string {
    return this._email
  }

  get phone(): string {
    return this._phone
  }
}

class Message {
    static DEFAULT_FROM = new Contact('orcaniser@skillerwhale.test', '+123 456 78 90', false, false)

    static buildMessages(recipients: Contact[]): Message[]{
        const smsRecipients = recipients.filter(r => r.sendSMS)
        const emailRecipients = recipients.filter(r => r.sendEmail)

        const messages: Message[] = []

        messages.push(new SMS(Message.DEFAULT_FROM, smsRecipients))
        messages.push(new Email(Message.DEFAULT_FROM, emailRecipients))

        return messages
    }

    sender: Contact

    recipients: Contact[]

    constructor(sender: Contact, recipients: Contact[]) {
        this.sender = sender
        this.recipients = recipients
    }

    preview() {
      console.log(`Message ${this.sender}`)
    }
}

class Email extends Message {
    preview() {
        const emails = this.recipients.map(r => r.email).join(',')
        console.log(`Email from ${this.sender.email} to ${emails}`)
    }
}

class SMS extends Message {
    preview() {
        const phoneNumbers = this.recipients.map(r => r.phone).join(',')
        console.log(`SMS from ${this.sender.phone} to ${phoneNumbers}`)
    }
}

const contacts1 = [
  new Contact('ada@plaicebook.test', '+1234560001', true, true),
  new Contact('betty@plaicebook.test', '+1234560002', true, true),
  new Contact('celine@plaicebook.test', '+1234560003', true, true),
]

const contacts2 = [
  new Contact('alex@plaicebook.test', '', true, false),
  new Contact('bob@plaicebook.test', '', true, false),
  new Contact('', '+1234560006', false, true),
]

const messages1 = Message.buildMessages(contacts1)
const messages2 = Message.buildMessages(contacts2)

messages1[0]?.preview()
messages1[1]?.preview()

messages2[0]?.preview()
messages2[1]?.preview()

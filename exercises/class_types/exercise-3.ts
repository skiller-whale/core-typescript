export {} // Treats this file as a module, isolating type names

class Contact {
  private _email: string
  private _phone: string
  isSubscribedToEmail: boolean
  isSubscribedToSMS: boolean

  constructor (email: string, phone: string, isSubscribedToEmail: boolean, isSubscribedToSMS: boolean) {
    this._email = email
    this._phone = phone
    this.isSubscribedToEmail = isSubscribedToEmail
    this.isSubscribedToSMS = isSubscribedToSMS
  }

  equalTo (recipient: Contact): boolean {
    return this._email === recipient.email && this._phone === recipient.phone
  }

  get email (): string {
    return this._email
  }

  get phone (): string {
    return this._phone
  }
}

class Message {
  static DEFAULT_FROM = new Contact('orcaniser@skillerwhale.test', '+123 456 78 90', false, false)

  static buildMessages (recipients: Contact[]): [SMS, Email] {
    return [
      new SMS(Message.DEFAULT_FROM, recipients.filter(r => r.isSubscribedToSMS)),
      new Email(Message.DEFAULT_FROM, recipients.filter(r => r.isSubscribedToEmail))
    ]
  }

  sender: Contact
  recipients: Contact[]

  constructor (sender: Contact, recipients: Contact[]) {
    this.sender = sender
    this.recipients = recipients
  }

  preview () {
    console.log(`Message from ${this.sender}`)
  }
}

class Email extends Message {
  preview () {
    const emails = this.recipients.map(r => r.email).join(',')
    console.log(`Email from ${this.sender.email} to ${emails}`)
  }
}

class SMS extends Message {
  preview () {
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

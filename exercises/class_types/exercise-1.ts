export {} // Treats this file as a module, isolating type names

class Contact {
  email: string
  phone: string
  isSubscribedToEmail: boolean
  isSubscribedToSMS: boolean

  constructor (email: string, phone: string, isSubscribedToEmail: boolean, isSubscribedToSMS: boolean) {
    this.email = email
    this.phone = phone
    this.isSubscribedToEmail = isSubscribedToEmail
    this.isSubscribedToSMS = isSubscribedToSMS
  }
}

class Message {
  // Include static definitions here

  sender: Contact
  recipients: Contact[]

  constructor (sender: Contact, recipients: Contact[]) {
    this.sender = sender
    this.recipients = recipients
  }
}

class Email extends Message {
  preview() {
    const recipients = this.recipients.map(r => r.email).join(',')
    console.log(`Email from ${this.sender.email} to ${recipients}`)
  }
}

class SMS extends Message {
  preview() {
    const recipients = this.recipients.map(r => r.phone).join(', ')
    console.log(`SMS from ${this.sender.phone} to ${recipients}`)
  }
}

const defaultContact = new Contact('orcaniser@skillerwhale.test', '+123 456 78 90', false, false)

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

const messages1 = [
  new SMS(defaultContact, contacts1.filter(r => r.isSubscribedToSMS)),
  new Email(defaultContact, contacts1.filter(r => r.isSubscribedToEmail))
]

const messages2 = [
  new SMS(defaultContact, contacts2.filter(r => r.isSubscribedToSMS)),
  new Email(defaultContact, contacts2.filter(r => r.isSubscribedToEmail))
]

messages1[0]?.preview()
messages1[1]?.preview()

messages2[0]?.preview()
messages2[1]?.preview()

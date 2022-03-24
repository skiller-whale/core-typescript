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

function equalTo (recipient1: Contact, recipient2: Contact): boolean {
  return recipient1.email === recipient2.email && recipient1.phone === recipient2.phone
}

const contacts1: Contact[] = [
  new Contact('ada@plaicebook.test', '+1234560001', true, true),
  new Contact('betty@plaicebook.test', '+1234560002', true, true),
  new Contact('celine@plaicebook.test', '+1234560003', true, true)
]

const contacts2: Contact[] = [
  new Contact('alex@plaicebook.test', '', true, false),
  new Contact('bob@plaicebook.test', '', true, false),
  new Contact('', '+1234560006', false, true)
]

contacts1[0].email = 'mutated@plaicebook.test'
contacts2[1].phone = '+100200300'

const expected1 = new Contact('ada@plaicebook.test', '+1234560001', true, true)
const expected2 = new Contact('bob@plaicebook.test', '', true, false)

console.log(`First contact as expected? ${equalTo(expected1, contacts1[0])}`)
console.log(`Second contact as expected? ${equalTo(expected2, contacts2[1])}`)

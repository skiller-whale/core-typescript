// @ts-nocheck
export default {} // empty export to ensure the compiler treats this file as a module

type Contact = {
  name: {
    firstName: string
    lastName: string
  }
  emailAddresses: string[]
  phoneNumbers: number[]
}

type Formatter<T> = T

// this function should compile without errors
const formatContact = (contact: Contact, contactFormatter: Formatter<Contact>): string => {
  let output = `Name: ${contactFormatter.formatName(contact.name)}\n`
  output += `Email addresses: ${contactFormatter.formatEmailAddresses(contact.emailAddresses)}\n`
  output += `Phone numbers: ${contactFormatter.formatPhoneNumbers(contact.phoneNumbers)}`
  return output
}

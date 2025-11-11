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

// part 1
type DeepReadonly<T> = T

// *every* assignment in this function body should raise an error
const modifyReadonlyContact = (contact: DeepReadonly<Contact>): void => {
  contact.name.firstName = "Ada"
  contact.name = { firstName: "Ada", lastName: "Loveplaice" }
  contact.emailAddresses[0] = "ada@seamail.com"
  contact.emailAddresses = ["ada@seamail.com"]
  contact.phoneNumbers[0] = 123456789
  contact.phoneNumbers = [123456789]
}

// part 2
type Writeable<T> = T

// *no* assignment in this function body should raise an error
const modifyWriteableContact = (contact: Writeable<DeepReadonly<Contact>>): void => {
  contact.name.firstName = "Ada"
  contact.name = { firstName: "Ada", lastName: "Loveplaice" }
  contact.emailAddresses[0] = "ada@seamail.com"
  contact.emailAddresses = ["ada@seamail.com"]
  contact.phoneNumbers[0] = 123456789
  contact.phoneNumbers = [123456789]
}

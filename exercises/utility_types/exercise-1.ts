export default {} // empty export to ensure the compiler treats this file as a module

type Species = "Skiller" | "Orca" | "Humpback"

type Whale = {
  id: number
  name: string
  species: Species
  signedUp: false
}

type User = {
  signedUp: true
  email: string
  marketingEmails: boolean
  updateNotifications: boolean
}

type WhaleUser = {
  id: number
  name: string
  species: string
  signedUp: true
  email: string
  marketingEmails: boolean
  updateNotifications: boolean
}

type WhaleFormFields = {
  name?: string
  species?: string
}

type EmailPreferenceFormFields = {
  marketingEmails: boolean
  updateNotifications: boolean
}

// don't edit the code below here -
// if you haven't made any mistakes, these assignments should all compile without errors
const whale: Whale = {
  id: 42,
  name: "Ada",
  species: "Skiller",
  signedUp: false,
}

const whaleUser: WhaleUser = {
  ...whale,
  signedUp: true,
  email: "ada@skillerwhale.com",
  marketingEmails: false,
  updateNotifications: true,
}

const whaleFormFields: WhaleFormFields = {
  name: whale.name,
}

const emailPreferenceFormFields: EmailPreferenceFormFields = {
  marketingEmails: whaleUser.marketingEmails,
  updateNotifications: whaleUser.updateNotifications,
}

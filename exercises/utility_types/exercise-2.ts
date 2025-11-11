export default {} // empty export to ensure the compiler treats this file as a module

type WhaleStringProps =
  | "id"
  | "name"
  | "species"

type WhaleBooleanProps =
  | "signedUp"
  | "marketingEmails"
  | "updateNotifications"

type EssentialWhaleProps =
  | "id"
  | "species"
  | "marketingEmails"
  | "updateNotifications"

type RequiredStringProps = "id" | "species"

type OptionalStringProps = "name"

type RequiredBooleanProps = "marketingEmails" | "updateNotifications"

type OptionalBooleanProps = "signedUp"

type Whale = { id: string, species: string }
  & { name?: string }
  & { marketingEmails: boolean, updateNotifications: boolean }
  & { signedUp?: boolean }

// these assignments should both compile without errors
const whale1: Whale = {
  id: "ada",
  name: "Ada",
  species: "Skiller",
  signedUp: true,
  updateNotifications: true,
  marketingEmails: false,
}

const whale2: Whale = {
  id: "ada",
  species: "Skiller",
  updateNotifications: true,
  marketingEmails: false,
}

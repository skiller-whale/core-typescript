// empty export to ensure the compiler treats this file as a module
export {}

type SubscriptionDetails = { name: string, subscriptionType: string, access: string }

function getAccessDetails (subscriptionType: string): string {
  switch (subscriptionType) {
    case 'Gold':
      return 'Everything'
    case 'Silver':
      return 'Resources'
    case 'Bronze':
        return 'Newsletter'
    case 'None':
      return 'Nothing'
    default:
      throw new Error(`Invalid subscription type ${subscriptionType}`)
  }
}

function addSubscriptionDetails (person: { name: string }, subscriptionType: string = 'None'): SubscriptionDetails {
  let access = getAccessDetails(subscriptionType)
  return { name: person.name, access, subscriptionType }
}

const person = { name: 'John' }
const subscribedPerson = addSubscriptionDetails(person, 'Brass')

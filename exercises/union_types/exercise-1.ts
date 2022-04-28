export {} // empty export to ensure the compiler treats this file as a module

function generateSubscriptionDetails () {
  return {
    subscriptionLevel: 'Bronze',
    emailConsent: true
  }
}

function addSubscriptionDetails (person: { name: string }, signedUp: boolean): any {
  if (signedUp) {
    const { subscriptionLevel, emailConsent } = generateSubscriptionDetails()
    return { name: person.name, isSubscribed: true, subscriptionLevel, emailConsent }
  } else {
    return { name: person.name, isSubscribed: false }
  }
}

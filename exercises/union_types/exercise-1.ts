	/*
	 |   * Define two types that match the two potential return statements in the `isSubscribed` function.
	 |
	 |   * Change the return type in the `isSubscribed` function from `any` to a union of the two types you just created.
	 */

function generateSubscriptionDetails() {
    return {
        subscriptionLevel: 'Bronze',
        emailConsent: true
    }
}

function isSubscribed(person: {firstname: string}, signedUp: boolean): any {
    if (signedUp) {
      let { subscriptionLevel, emailConsent } = generateSubscriptionDetails()
      return { firstname: person.firstname, subscriptionLevel, emailConsent, isSubscribed: true }
    } else {
      return { firstname: person.firstname, isSubscribed: false }
    }
}
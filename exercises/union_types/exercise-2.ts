/*
  |  * Define two literal string unions, one named `SubscriptionType` and one named `AccessType`,
  |       to represent the possible values for subscriptionType and access in SubscriptionDetails.
  |
  |  * Use the literal string unions you just created in all the appropriate places,
  |     including in the `SubscriptionDetails` type definition and in the parameter / return types of the function signatures.
  |
  |  * If your code is correct, running `tsc` should raise an error `Argument of type '"Brass"' is
  |      not assignable to parameter of type 'SubscriptionType | undefined'.`
  |
  |  * Before you move on, edit the function call to use a correct parameter so that Typescript can compile the code without errors.
*/

type SubscriptionDetails = { firstname: string, subscriptionType: string, access: string }

function getAccessDetails(subscriptionType: any) {
  switch(subscriptionType) {
    case "Gold":
      return "Everything"
    case "Silver":
      return "Resources"
    case "Bronze":
        return "Newsletter"
    default:
      return "Nothing"
  }
}

function assignSubscriptionDetails(person: {firstname: string}, subscriptionType = "None"): SubscriptionDetails {
    let access = getAccessDetails(subscriptionType)
    return { firstname: person.firstname, access, subscriptionType }
  }

assignSubscriptionDetails({ firstname: "John" }, "Brass" )
// empty export to ensure the compiler treats this file as a module
export {}

type Subscriber = {
  name: string,
  subscriptionType: string,
  canCreate?: undefined,
  trialEnds?: undefined
}

type TrialUser = {
  name: string,
  trialEnds: Date,
  subscriptionType?: undefined,
  canCreate?: undefined
}

type Admin = {
  name: string,
  superAdmin: boolean,
  subscriptionType?: undefined,
  trialEnds?: undefined
}

type User = Subscriber | TrialUser | Admin

function getDescription (user: User): string {
  if (user.subscriptionType !== undefined) {
    return `${user.name} is a subscriber with a ${user.subscriptionType} subscription`
  } else if (user.trialEnds !== undefined) {
    return `${user.name} is on a trial subscription which ends on ${user.trialEnds}`
  } else if (user.superAdmin !== undefined) {
    return `${user.name} is an admin with ${user.superAdmin ? 'full' : 'partial'} admin rights`
  } else {
    return 'this should be impossible'
  }
}

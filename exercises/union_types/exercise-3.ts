export {} // empty export to ensure the compiler treats this file as a module

type Subscriber = {
  name: string,
  subscriptionType: string
}

type TrialUser = {
  name: string,
  trialEnds: Date
}

type Admin = {
  name: string,
  superAdmin: boolean
}

type User = Subscriber | TrialUser | Admin

function getDescription (user: User): string {
  if ('subscriptionType' in user) {
    return `${user.name} is a subscriber with a ${user.subscriptionType} subscription`
  } else if ('trialEnds' in user) {
    return `${user.name} is on a trial subscription which ends on ${user.trialEnds}`
  } else if ('superAdmin' in user) {
    return `${user.name} is an admin with ${user.superAdmin ? 'full' : 'partial'} admin rights`
  } else {
    return 'this should be impossible'
  }
}

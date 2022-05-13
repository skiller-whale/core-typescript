export {} // empty export to ensure the compiler treats this file as a module

type Subscriber = {
  role: "Subscriber"
  name: string
  subscriptionType: string
}

type TrialUser = {
  role: "TrialUser"
  name: string
  subscriptionType: string
  trialEnds: Date
}

type Admin = {
  role: "Admin"
  name: string
  superAdmin: boolean
}

type User = Subscriber | TrialUser | Admin

function getDescription(user: User): string {
  switch (user.role) {
    case "Subscriber":
      return `${user.name} is a subscriber with a ${user.subscriptionType} subscription`
    case "TrialUser":
      return `${user.name} is on a trial subscription which ends on ${user.trialEnds}`
    case "Admin":
      return `${user.name} is an admin with ${
        user.superAdmin ? "full" : "partial"
      } admin rights`
  }
}

import { displayUsers, users } from "./users"

type User = Admin | Subscriber | TrialUser

type Admin = {
  name: string
  superAdmin: boolean
}

type Subscriber = {
  name: string
  subscriptionType: string
}

type TrialUser = {
  name: string
  trialEnds: Date
}

const admins: Admin[] = []

for (const user of users) {
  if ("superAdmin" in user) {
    admins.push(user)
  }
}

console.log(displayUsers(admins))

// @ts-nocheck - delete this comment at the start of the exercise!
import { users } from "./users"

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

function displayAdmin(admin: Admin): string {
  return admin.superAdmin ? "super admin" : "admin user"
}

function displaySubscriber(subscriber: Subscriber): string {
  return `${subscriber.subscriptionType} user`
}

function displayTrialUser(trialUser: TrialUser): string {
  return `trial user (until ${trialUser.trialEnds.toLocaleDateString()})`
}

function displayUsers(value?: User | User[]): string {
  const isArray = false
  const isAdmin = false
  const isSubscriber = false
  const isTrialUser = false

  if (isArray) {
    return value.map(displayUsers).join("\n")
  }

  if (isAdmin) {
    return displayAdmin(value)
  }

  if (isSubscriber) {
    return displaySubscriber(value)
  }

  if (isTrialUser) {
    return displayTrialUser(value)
  }

  return "no users"
}

console.log(displayUsers(users))

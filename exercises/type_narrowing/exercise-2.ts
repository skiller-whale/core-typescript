// @ts-nocheck - delete this comment at the start of the exercise!
import { users } from './users'

type User = Admin | Subscriber | TrialUser

class Admin {
  name: string = ''
  superAdmin: boolean = false
}

class Subscriber {
  name: string = ''
  subscriptionType: string = ''
}

class TrialUser {
  name: string = ''
  trialEnds: Date = new Date()
}

export function displayAdmin (admin: Admin): string {
  return admin.superAdmin ? 'super admin' : 'admin user'
}

export function displaySubscriber (subscriber: Subscriber): string {
  return `${subscriber.subscriptionType} user`
}

export function displayTrialUser (trialUser: TrialUser): string {
  return `trial user (until ${trialUser.trialEnds.toLocaleDateString()})`
}

export function displayUsers (value?: User | User[]): string {
  const isArray = false
  const isAdmin = false
  const isSubscriber = false
  const isTrialUser = false

  if (isArray) {
    return value.map(displayUsers).join('\n')
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

  return 'no users'
}

console.log(displayUsers(users))

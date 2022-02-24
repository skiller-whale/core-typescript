type User = Admin | Subscriber | TrialUser

type TaggedUser =
  | { tag: 'Admin', value: Admin }
  | { tag: 'Subscriber', value: Subscriber }
  | { tag: 'TrialUser', value: TrialUser }

type Admin = {
  name: string,
  superAdmin: boolean
}

type Subscriber = {
  name: string,
  subscriptionType: string
}

type TrialUser = {
  name: string,
  trialEnds: Date
}

const today = new Date()

export const users: User[] = [
  { name: 'Ernest Herringway', superAdmin: false },
  { name: 'Agatha Fishtie', superAdmin: true },
  { name: 'George Orwhale', subscriptionType: 'Silver' },
  { name: 'Salmon Rushdie', subscriptionType: 'Bronze' },
  { name: 'George Gurnard Shaw', trialEnds: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7) },
  { name: 'Richard Herring', trialEnds: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10) }
]

export const taggedUsers: TaggedUser[] = users.map(user => {
  if ('superAdmin' in user) return { tag: 'Admin', value: user }
  if ('subscriptionType' in user) return { tag: 'Subscriber', value: user }
  return { tag: 'TrialUser', value: user }
})

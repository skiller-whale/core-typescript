export default {} // empty export to ensure the compiler treats this file as a module

type User = Subscriber | Admin

type Subscriber = {
  name: string,
  subscriptionType: string
}

type Admin = {
  name: string,
  superAdmin: boolean
}

const users: User[] = []

const admins: Admin[] = []

for (const user of users) {
  if ('superAdmin' in user) {
    admins.push(user)
  }
}

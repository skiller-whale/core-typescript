// empty export to ensure the compiler treats this file as a module
export {}

type Subscriber = { name: string, subscriptionType: string }

type Admin = { name: string, superAdmin: boolean }

type User = Subscriber | Admin

const hybrid = {}

const subscriber = hybrid
const admin = hybrid
const user = hybrid

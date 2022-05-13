import {
  displayAdmin,
  displaySubscriber,
  displayTrialUser,
  taggedUsers as users,
} from "./users"

type User =
  | { tag: "Admin"; value: Admin }
  | { tag: "Subscriber"; value: Subscriber }
  | { tag: "TrialUser"; value: TrialUser }

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

type Response = {
  redirect: (path: string) => void
}

function displayUser(user: User): string {
  // implement this function
  return "???"
}

function homePageRedirect(user: User, response: Response): void {
  switch (user.tag) {
    case "Subscriber":
      response.redirect(`/subscriber/${user.value.subscriptionType}`)
      break
    case "TrialUser":
      response.redirect("/free-trial")
      break
    case "Admin":
      response.redirect(`/admin/${user.value.superAdmin ? "full" : ""}`)
      break
  }
}

users.forEach((user) => console.log(displayUser(user)))

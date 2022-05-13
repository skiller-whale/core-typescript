// @ts-nocheck - delete this comment at the start of the exercise!
export {} // empty export to ensure the compiler treats this file as a module

type Action =
  | { message: "set-difficulty"; value: string }
  | { message: "add-points"; value: number }
  | { message: "reset-score" }

const state = {
  difficulty: "easy",
  score: 0,
  previousScores: [],
}

function handleAction(action: Action): void {
  const warning = action.warning
  if (warning) {
    console.warn(warning)
  }

  switch (action.message) {
    case "set-difficulty":
      state.difficulty = action.value
      break
    case "add-points":
      state.score += action.value
      state.previousScores.push(state.score)
      break
    case "reset-score":
      const checkpoint = 10
      // look for the first score passed the checkpoint
      const index = state.previousScores.findIndex((x) => x > checkpoint)
      if (index > -1) {
        // reset to that score if found
        state.score = state.previousScores[index]
        // and delete all subsequent scores
        state.previousScores.splice(index + 1)
      } else {
        // otherwise reset to zero
        state.score = 0
      }
      break
  }
}

console.log("Initial state:", state)

handleAction({
  message: "set-difficulty",
  value: "hard",
  warning: "this setting is really difficult!",
})
handleAction({ message: "add-points", value: 4 })
handleAction({ message: "add-points", value: 5 })
handleAction({ message: "add-points", value: 3 })
handleAction({ message: "reset-score" })

console.log("New state:", state)

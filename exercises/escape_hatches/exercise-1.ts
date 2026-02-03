import type { Action, State } from "./_types.ts";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function isValidDifficulty(value: unknown) {
  return value === "easy" || value === "medium" || value === "hard";
}

function isValidAction(action: unknown) {
  if (typeof action !== "object" || action === null) return false;
  if (typeof action["message"] !== "string") return false;

  switch (action["message"]) {
    case "set-difficulty":
      return isValidDifficulty(action["difficulty"]);
    case "add-points":
      return typeof action["points"] === "number";
    case "reset-score":
      return true;
    default:
      return false;
  }
}

function advanceGameState(state: State, action: Action) {
  if (!isValidAction(action)) {
    throw new Error("Invalid action");
  }

  switch (action.message) {
    case "set-difficulty":
      state.difficulty = action.difficulty;
      break;
    case "add-points":
      state.previousScores.push(state.score);
      state.score += action.points;
      break;
    case "reset-score":
      state.score = 0;
      break;
  }
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
const gameState: State = {
  difficulty: "easy",
  score: 0,
  previousScores: [],
};
const history =
  "imagine user uploads JSON data here representing an array of actions";

try {
  const actions = JSON.parse(history);
  actions.forEach((action) => {
    advanceGameState(gameState, action);
  });
  console.log("Restored state:", gameState);
} catch (error) {
  console.error("Failed to restore state:", error.message);
}

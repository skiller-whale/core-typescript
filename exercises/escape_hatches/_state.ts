import type { Action, State } from "./_types";

function isValidDifficulty(value: unknown) {
  return value === "easy" || value === "medium" || value === "hard";
}

function isValidAction(action: unknown) {
  if (typeof action !== "object" || action === null) return false;
  if (!("message" in action) || typeof action.message !== "string")
    return false;

  switch (action.message) {
    case "set-difficulty":
      return "difficulty" in action && isValidDifficulty(action.difficulty);
    case "add-points":
      return "points" in action && typeof action.points === "number";
    case "reset-score":
      return true;
    default:
      return false;
  }
}

export function advanceGameState(state: State, action: Action) {
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
      return { ...state, score: 0 };
  }
}

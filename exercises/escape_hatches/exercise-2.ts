import type { Action, State } from "./_types.ts";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
const state = {
  difficulty: "easy",
  score: 0,
  previousScores: [],
};

function advanceGameState(action: Action) {
  const { warning } = action;
  if (warning) {
    console.warn(warning);
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
      // look for the first score passed the checkpoint
      const index = state.previousScores.findIndex((x) =>
        x > action.checkpoint
      );
      if (index > -1) {
        // reset to that score if found
        state.score = state.previousScores[index];
        state.previousScores = state.previousScores.slice(0, index + 1);
      } else {
        // otherwise reset to zero
        state.score = 0;
        state.previousScores = [];
      }
      break;
  }
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
advanceGameState({
  message: "set-difficulty",
  difficulty: "hard",
  warning: "this setting is really difficult!",
});
advanceGameState({ message: "add-points", points: 4 });
advanceGameState({ message: "add-points", points: 5 });
advanceGameState({ message: "add-points", points: 3 });
advanceGameState({ message: "reset-score", checkpoint: 2 });

console.log("Game over:", state);

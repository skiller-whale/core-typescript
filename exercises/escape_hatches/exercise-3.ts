import { describe, it, expect } from "./_pretend_test_framework.ts";
import { advanceGameState } from "./_state.ts";
import type { Action, State } from "./_types.ts";

function createGameState(
  difficulty: string,
  score: number = 0,
  previousScores: number[] = []
): State {
  return {
    difficulty,
    score,
    previousScores,
  };
}
advanceGameState
describe("updateState", () => {
  it("updates difficulty", () => {
    const gameState = createGameState("easy");
    const action = { message: "set-difficulty", difficulty: "hard" };
    advanceGameState(gameState, action);
    expect(gameState.difficulty).toBe("hard");
  });

  it("adds points", () => {
    const gameState = createGameState("easy", 5);
    const action = { message: "add-points", points: 10 };
    advanceGameState(gameState, action);
    expect(gameState.score).toBe(15);
  });

  it("resets score", () => {
    const gameState = createGameState("easy", 20);
    const action = { message: "reset-score", checkpoint: 0 };
    advanceGameState(gameState, action);
    expect(gameState.score).toBe(0);
  });

  it("throws error for invalid action", () => {
    const gameState = createGameState("easy");
    const invalidAction = { message: "invalid-action" };
    expect(() => advanceGameState(gameState, invalidAction)).toThrow(
      "Invalid action"
    );
  });
});

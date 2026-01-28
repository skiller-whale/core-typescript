export type State = {
  difficulty: string;
  score: number;
  previousScores: number[];
};

export type Action =
  | { message: "set-difficulty"; difficulty: string }
  | { message: "add-points"; points: number }
  | { message: "reset-score"; checkpoint: number };

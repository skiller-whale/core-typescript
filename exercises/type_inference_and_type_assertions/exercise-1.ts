export default {} // empty export so the compiler treats this file as a module

type Message = 'set-difficulty' | 'add-points' | 'set-game-over'

const state = {
  difficulty: 'easy',
  score: 0,
  gameOver: false
}

function makeSetDifficulty (difficulty: string) {
  return { message: 'set-difficulty', value: difficulty }
}

function makeAddPoints (points: number) {
  return { message: 'add-points', value: points }
}

function makeSetGameOver (gameOver: boolean) {
  return { message: 'set-game-over', value: gameOver }
}

function handleAction (action: { message: Message, value: string | number | boolean }): void {
  switch (action.message) {
    case 'set-difficulty':
      // @ts-ignore
      state.difficulty = action.value
      break
    case 'add-points':
      // @ts-ignore
      state.score += action.value
      break
    case 'set-game-over':
      // @ts-ignore
      state.gameOver = action.value
      break
  }
}

console.log('Initial state:', state)

handleAction(makeSetDifficulty('hard'))
handleAction(makeAddPoints(5))
handleAction(makeSetGameOver(true))

console.log('New state:', state)

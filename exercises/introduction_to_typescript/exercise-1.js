const message = 'Hello, TypeScript!'

const messages = []

for (let i = 0; i < 3; i++) {
  messages.push(`${message} ${i + 1}`)
}

function combineMessages (messages) {
  return messages.join('\n')
}

// Note that there is a typo in this function call; don't correct
// it until indicated.
console.log(combineMessage(messages))

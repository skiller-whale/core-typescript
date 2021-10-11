import { mysteryValue } from './mystery_data'

const x: any = mysteryValue

console.log('I am a mystery value.')

if (Object.keys(x)[0] !== undefined) {
  console.log('I have some properties.')
}

if (x.length !== undefined) {
  console.log('I could be a string or an array.')
}

if (x[0].toLowerCase() === 'a') {
  console.log('I start with an "a".')
}

if (x < 100) {
  console.log('I am a small number.')
}

console.log('What could I be?')

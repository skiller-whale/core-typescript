// @ts-nocheck

//  Exercise 3a (Functions)

const rhyme = 'One, two, three, four, five,\nOnce I caught a fish alive.\nSix, seven, eight, nine, ten,\nThen I let it go again.'

function singLoudly(rhyme: number): number {
    console.log(rhyme.toUpperCase())
    return rhyme.split(`\n`).length
}

singLoudly(rhyme, 25)

//  Exercise 3b (Functions)

// Write your own function here



//  Exercise 3c (Functions)

let arrayOfNumbers = [1, 2, 3, 4, 5]
//@ts-ignore
arrayOfNumbers.forEach(item => item.toUpperCase())

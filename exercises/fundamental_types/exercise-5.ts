// @ts-nocheck

// Exercise 5a (Union types)

function welcomeHumanOrRobot(name: string | number) {
    console.log(`WELCOME ${name.toUpperCase()}`)
  }

// Exercise 5b

function howBig(num: number) {
    if (num < 10) return "small";
    if (num >= 10 && num < 100) return "medium";
    return "big";
}
const firstName = 'Guga'
const wrongName = 1

function greeting(name: string) {
  return `Hello ${name}`
}

console.log(greeting(firstName))
// console.log(greeting(wrongName))

function sum(a: number, b: number) {
  return `${a} + ${b} = ${a + b}`
}

console.log(sum(2, 3))

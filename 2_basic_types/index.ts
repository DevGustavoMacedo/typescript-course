// number

let n1: number = 1
console.log(n1)

n1 = 2.222
console.log(n1)

// n1 = n1.toString()                   não funciona pois retorna string
// const n2: number = n1.toString()     não funciona pois retorna string
const n2: string = n1.toString()
console.log(n2)



// string

let fullName: string
const firstName: string = 'Vinicius'
// const lastName: string = 13     não funciona pois só aceita string 
const lastName: string = '13'
fullName = firstName+lastName
console.log(fullName)



// boolean

let alive: boolean
const vinicius12: string = 'dead' 
alive = vinicius12 === 'alive' ? true : false 
console.log(`Vinicius12 está ${alive === true ? 'vivo' : 'morto'}`)



// annotation e inference 

let ann: string = 'a'
let inf = 'a' // o TS inferiu que é tipo é string

/* em ambos casos abaixo dá erro pois ele espera uma string, não number.
até mesmo por inferência isso funciona, inclusive os métodos disponiveis */

// ann = 1
// inf = 1



// desafio

const ex: number = 2
const ex2 = ex.toString()
console.log('Desafio ' + ex2)

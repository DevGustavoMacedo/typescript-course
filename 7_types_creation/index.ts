// generics

const showMessage = <T>(name: T): string => 'Hello, ' + name

console.log(showMessage('James Bond'))



// constraint (limitar o Generics)

function showPerson<T extends {nickName: string}>(obj: T) {
  console.log('Hi, ' + obj.nickName)
} 

showPerson({nickName: 'Butcher', realName: 'William'})



// generics interface

interface Vehicle<T, U> {
  name: string
  wheels: T
  wings: U
}

type Car = Vehicle<number, boolean>
type Boat = Vehicle<boolean, boolean>

const car: Car = {
  wheels: 4,
  wings: false,
  name: 'Honda'
}

console.log(car)

const boat: Boat = {
  wheels: false,
  wings: false,
  name: 'Slice of Life'
}

console.log(boat)



// type parameters (utilizar uma chave de um objeto como parâmetro no generic)

function getKey<T, U extends keyof T>(obj: T, key: U) {
  return 'The Key is ' + obj[key]
}

const server = {
  name: (Math.random() + 1).toString(36).substring(2),
  hash: Math.trunc(Math.random() * 1001)
}

// console.log(getKey(server, 'id'))    retorna erro pois não existe esse campo
console.log(getKey(server, 'name'))
console.log(getKey(server, 'hash'))



// keyof type (muito parecido com o anterior, mas mais simples)

type Person = {name: string, age: number}

function showData(obj: Person, key: keyof Person) {
  return obj[key]
}

const somePerson: Person = {
  name: 'Jeremias',
  age: 33
}

// console.log(showData(somePerson, 'id'))    retorna erro, campo não existe
console.log(showData(somePerson, 'name'))

// também dá pra limitar mais pegando uma chave especifica
type Name = Person['name']

function showName(name: Name) {
  return name
}

const firstName: Name = 'Billy'

// typeof type: tipar pelo tipo de outra variavel. Não entendi a utilidade disso
const obj1: {
  name: string
  age: number | string
} = {
  name: 'Kane',
  age: 44
}

console.log(obj1)

const obj2: typeof obj1 = {
  name: 'Kratos',
  age: '99'
}

console.log(obj2)



// conditional types

interface Human {
  name: string
  sayajinName: Human extends {powers: string[]} ? string : boolean
}

interface Sayajin {
  name: string
  powers: string[]
  sayajinName: Sayajin extends {powers: string[]} ? string : boolean
}

const human: Human = {
  name: 'Satan',
  sayajinName: false
}

console.log(human)

const goku: Sayajin = {
  name: 'Goku',
  powers: ['kamehameha'],
  sayajinName: 'Kakarot'
}

console.log(goku)
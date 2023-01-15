// arrays

let nums: number[] = [1, 2, 3]
// nums.push('4')  dá erro
nums.push(4)
console.log(nums)

// uma forma alternativa e mais complexa de declarar arrays
let nums2: Array<number> = [5, 6, 7]
nums2.push(8)
console.log(nums2)



// any (evitar o máximo o seu uso, já que aceita -qualquer- tipo)
let nums3: any[] = [1, 'um', {n: '1'}]
nums3.push(true)
console.log(nums3)



// funções
// tipar os parâmetros faz com variaveis
// tipar o retorno também

function sum(a: number, b: number): number {
  // return a + b + "5" dá erro pois só aceita retornar number
  return a + b
}
console.log(2, 3)

const minus = (a: number, b: number): number => a + b
console.log(minus(2, 3))



// Objetos

function personData(person: {name: string, age: number}): string {
  return `${person.name} tem ${person.age} anos`
}

const person: {name: string, age: number} = {name: 'Durval', age: 50}

console.log(personData(person))



// propriedades opcionais (colocar o sinal de interrogação -?-)
// props opcionais sempre por último nas funções

function showNames(person: {firstName: string, middleName?: string, lastName: string}): string {
  if(person.middleName !== undefined) { // é melhor comparar com o -undefined-
    return `${person.firstName} ${person.middleName} ${person.lastName}`
  }

  return `${person.firstName} ${person.lastName}`
}

console.log(showNames({firstName: 'Durval', lastName: 'Davila'}))



// Union types: aceitar 2 ou mais tipos

function userRole(role: string | boolean): string {
  if(typeof role === 'boolean') {
    return 'Usuário negado'
  }

  return 'Usuário ' + role
}

console.log(userRole('Admin'))
console.log(userRole(false))
// userRole(1)    dá erro pois só aceita string ou boolean 



// Type Alias (mesma coisa do anterior, só que é reusável)

type ID = number | string

function showId(id: ID): string {
  return `Mostrando o id ${id} do tipo ${typeof id}`
}

function addId(id: ID): string {
  return `Cadastrando o id ${id} do tipo ${typeof id}`
}

console.log(showId(1))
console.log(addId('1'))

// dá pra usar em funções também
type Person = (
  name: string
) => string

const returnPerson: Person = (name) => {
  return name
}



// Interface (mesma coisa do anterior, só que maior])

interface userData {
  id: number | string
  firstName: string
  lastName?: string
  adult: boolean
}

function showUserData(user: userData): string {
  if(user.lastName !== undefined) {
    return `${user.firstName} ${user.lastName} tem o id ${user.id} e ${user.adult === true ? 'é' : 'não é'} adulto`
  }
  return `${user.firstName} tem o id ${user.id} e ${user.adult === true ? 'é' : 'não é'} adulto`
}

const user: userData = {
  id: 1,
  firstName: 'Joventino',
  adult: false
}

console.log(showUserData(user))



// Literal types (mesma coisa de Union Type mas você inventa os tipos)

type Color = 'green' | 'blue' | 'red'

function chooseColor(color: Color): string {
  return 'O usuário escolheu a cor ' + color
}

console.log(chooseColor('blue')) // assim o emmet do vscode só recomenda as cores de Color



// non null assertion
// as vezes o TS não acha o algum elemento, apesar de sabermos que ele existe
// então pra fazer ele ignorar, colocamos o -!- afirmando que existe

const title = document.querySelector('h3')
// console.log(title.innerText)   dá o erro "Object is possibly 'null'"
console.log(title!.innerText)



// bigint - um número extremamente grande, raramente trabalhará com isso
// para habilitar esse tipo, tem que mudar o target da config do TS pra ES2020
const bigMoney = 100n
console.log(bigMoney) // fica até uma colração diferente no console



// symbol - também só funciona com ES2020, e também é pouco usado
// ele torna um valor único, apontando pra outra referência

const symbolA1: symbol = Symbol('A')
const symbolA2: symbol = Symbol('A')

console.log(symbolA1 === symbolA2) // vai retornar falso mesmo os valores sendo iguais
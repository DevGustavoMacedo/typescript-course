// interface
interface ProductProps {
  name: string
  price: number
  isAvailable?: boolean
}

const product = (product: ProductProps) => {
  if(product.isAvailable) {
    return product.name + ' está disponível e custa R$' + product.price
  }

  return product.name + ' custa R$' + product.price
}

const shoe: ProductProps = {
  name: 'Jordan', 
  price: 22000
}

const shirt: ProductProps = {
  name: 'Brutal Kill', 
  price: 320,
  isAvailable: true
}

console.log(product(shoe))
console.log(product(shirt))



// readonly (proprieade imutavel/constante)
interface UserProps {
  name: string
  readonly level: string | number
}

let user: UserProps = {name: 'David', level: 2}


const showUser = (user: UserProps) => {
  // user.level = 1     Cannot assign to 'level' because it is a read-only property.

  return user.name + ' nível ' + user.level
} 

console.log(showUser(user))



// index signature - quando você não sabe os nomes da propriedades de um objeto
// todas props vão ter que ser do(s) mesmo(s) tipo(s) declarados no index signature

interface NumbersProps {
  [index: string]: number | string
}

let numbers: NumbersProps = {
  number: 1,
  text: '1'
}

console.log(numbers)



// extends interfaces

interface Human {
  name: string
}

interface SuperHuman extends Human {
  superPowers: string[] 
}

const person: Human = {
  name: 'Djalminha'
}

const hero: SuperHuman = {
  name: 'Ribamar',
  superPowers: ['Super chute', 'Super cabeçada']
}

console.log(person)
console.log(hero)



// intersection types (juntar interfaces ou types, parecido com herança)

type Goku = Human & SuperHuman

const goku: Goku = {
  name: 'Goku',
  superPowers: ['Kamehameha', 'Genki Dama']
}

console.log(goku)



// ReadOnlyArray (não permite alterar por atribuição direta, apenas por métodos)

let juices: ReadonlyArray<string> = ['Apple', 'Grape', 'Orange']

// juices[0] = 'Green Apple'    Retorna erro

juices = juices.map(item => {
  if(item === 'Apple') return 'Green Apple' 
  
  return item
})

console.log(juices)



// tupla (array com tipos e número de items pré definido)

type sumArrays = [number, number, number] // daria pra colocar readonly

// const arr1: sumArrays = [1, 2]     Dá erro pois falta um número
let arr1: sumArrays = [1, 2, 3]
let arr2: sumArrays = [4, 5, 6]

const arrSum = arr1.map((arr, index) => arr + arr2[index])
console.log(arrSum)

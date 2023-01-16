// callback (uma função que chama outra função) como parâmetro de função (wtf kkkk)

function greeting(name: string, hello = 'Olá '): string { 
// ele faz a inferencia do tipo de 'hello' pelo valor
  return  hello + name
}

function preGreeting(fn: (name: string) => string, username: string) {
  console.log('Bom dia')
  console.log(fn(username))
}

preGreeting(greeting, 'Michael Scarn')



// Generics - normalmente se usam as letras T, U, V
// Quando você aceita vários tipos, ou não sabe qual tipo vai vir
// Imagina como se pudesse usar a mesma função, mas de forma genérica, aceitando qualquer tipo
// Diferente do 'any' você consegue tornar o parâmetro flexivel, mas ainda limitado  

const showArray = <T>(arr: T[]): T => {
  return arr[0]
}

const stringArray = showArray(['1', '2', '3']) // o tipo da const é string
const numberArray = showArray([1, 2, 3]) // o tipo da const é number

// também pode explicitar o tipo
const numberArray2 = showArray<number>([1, 2, 3]) // o tipo da const é number

console.log(stringArray)
console.log(numberArray)


const mergeObjects = <T1, T2>(obj1: T1, obj2: T2) => {
  return {...obj1, ...obj2}
}

console.log(mergeObjects({name: 'Andrew'}, {age: 33}))



// constraints (limitar o Generics com Union)

const bigger = <T extends number | string>(a: T, b: T) => +a > b ? a : b

console.log(bigger(2, 3))
console.log(bigger('4', '5'))


// outra forma de fazer isso
const mergeArrays = <T>(arr1: T[], arr2: T[]) => {
  return arr1.concat(arr2)
}

const mergedArrays = mergeArrays<number | string>([1, 2, 3], ['1', '2', '3']) // o tipo da const é string

console.log(mergedArrays)



// Destructuring

interface ProductProps {
  name: string
  price: number
}

const product = ({name, price}: ProductProps) => name + ' custa R$' + price

console.log(product({name: 'Sabonete', price: 3.21}))
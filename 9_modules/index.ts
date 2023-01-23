import greeting from './greet' // pode mudar o nome da função pois só exporta ela
import { sum, minus, multiply as mult } from './calculator'
import Cats from './cats'
import dog from './dogs'

console.log(greeting())

console.log(sum(2, 1))

console.log(mult(2, 1))

console.log(minus(2, 1))

console.log(dog.makeNoise())

const cat = new Cats('Felix', 'meow')

console.log(cat.makeNoise())
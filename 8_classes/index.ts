// campos em classes
class Person1 {
  name!: string
  age!: number
}

const person1 = new Person1()

person1.name = 'Kim'
person1.age = 30

console.log(person1)



// constructor (instanciar com valores pré definidos)
class Person2 {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// const person2 = new Person2('Jimmy', '40')
const person2 = new Person2('Jimmy', 40)
console.log(person2)



// readonly em classe
class Person3 {
  name
  readonly age = 42

  constructor(name: string) {
    this.name = name
  }
}

let person3 = new Person3('Jorge Guzman')
person3.name = 'Lalo Salamanca'
// person3.age = 32     retorna erro pois é uma proprieade só de leitura

console.log(person3)



/************************ herança em classes *************************/
class Person4 {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperHuman4 extends Person4  {
  power

  constructor(name: string, power: string) {
    super(name)
    this.power = power
  }
}

const person4 = new Person4('Clark')
console.log(person4)

const superHuman4 = new SuperHuman4('Superman', 'Fly')
console.log(superHuman4)



/********************* Métodos (mesma coisa de funções) **********************/
class Person5 {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting(): string {
    return 'Hello ' + this.name
  }
}

const person5 = new Person5('Huel')

console.log(person5)
console.log(person5.greeting())



/********************* Getters - lê as propriedades da classe ****************/
/********************* Setters - modifica as propriedades da classe **********/

class Person6 {
  name!: string // ! para forçar a inicialização da propriedade


  get showName(): string {
    return this.name
  }

  // o setter só pode ter um parametro, mais que isso dá erro    
  // set modifyName(newName: string, age: number) {     
  set modifyName(newName: string) {
    // retorna erro pq o setter não pode retornar nada
    // return newName     
    this.name = newName
  }
}

const person6 = new Person6()

// o get e set são acessados sem parenteses ()
person6.modifyName = 'Andy Bernard'
console.log(person6.showName)

console.log(person6)

/********************* Implements - classes herdando métodos de interfaces */
interface Animals {
  makeNoise(): string
}

class Cats implements Animals {
  noise

  constructor(noise: string) {
    this.noise = noise
  }
  
  makeNoise(): string {
    return 'Cats noise is ' + this.noise  
  }
}

class Dogs implements Animals {
  noise

  constructor(noise: string) {
    this.noise = noise
  }
  
  makeNoise(): string {
    return 'Dogs noise is ' + this.noise  
  }
}

const cat = new Cats('meow')
const dog = new Dogs('woof')

console.log(cat.makeNoise())
console.log(dog.makeNoise())



/**************** Override - classes filhas herdando métodos e os sobrescrevendo */
class Numbers {
  showNumbers(arr: number[]): number[] {
    return arr
  }
}

console.log(new Numbers().showNumbers([1, 2, 3, 4]))

class PairNumbers extends Numbers {
  showNumbers(arr: number[]): number[] {
    return arr.filter(item => item % 2 === 0)
  }
}

console.log(new PairNumbers().showNumbers([1, 2, 3, 4]))



/**************** Visibilidade de propriedades e métodos
Public - acessível por qualquer classe que herdar (default) 
Protected - acessível através de métodos pela classe que criou e pelas que herdaram
Private - acessível também por métodos e apenas pela classe que criou */

class Doja1 {
  public name = 'Doja Cat'
}

class Doja2 extends Doja1 {
  protected phrase = 'say so'

  protected saySO(): string {
    return 'Why don\'t you ' + this.phrase + '?'
  }

}

const doja2 = new Doja2()
console.log(doja2.name)

class Doja3 extends Doja2 {
  showPhrase(): string {
    return this.phrase
  }

  showSaySO(): string {
    return this.saySO()
  }
}

const doja3 = new Doja3()
console.log(doja3.showPhrase())
console.log(doja3.showSaySO())

class Doja4 extends Doja3 {
  private truth = 'Better than...'
  
  private theTruth(): string {
    return this.truth + 'Nicki'
  }

  get showTheTruth(): string {
    return this.theTruth()
  }
}

const doja4 = new Doja4()

// console.log(doja4.truth)   retorna erro, não dá pra acessar assim
// console.log(doja4.theTruth)    também dá erro pois o método é privado
console.log(doja4.showTheTruth)

class Doja5 extends Doja4 {
}

// console.log(new Doja5().truth)     não pode herdar algo privado
console.log(new Doja5().showTheTruth)   // também dá porque o método é public



/* Static: permite acessar propriedades e métodos sem instanciar um objeto */
class User1 {
  static firstName = 'Nacho'
  lastName = 'Varga'

  static showFirstName(): string {
    return User1.firstName 
  }

  showLastName(): string {
    return this.lastName 
  }
}

const user1 = new User1()

// console.log(User1.lastName)    não dá pra acessar sem instanciar
console.log(User1.firstName)
// console.log(user1.firsttName)
console.log(user1.lastName)



/* Generics aplicado as classes */
class User2<T, U> {
  firstName
  lastName

  constructor(firstName: T, lastName: U) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get showName() {
    return this.firstName + ' ' + this.lastName
  }
}

const user2 = new User2('Nacho', 'Varga')

console.log(user2.showName)



/* Parameters Properties (um shorthand pras propriedades das classes) */
// dá pra encapsular uma classe numa variavel
const Film1 = class<T> {
  constructor(
    public title: T, 
    protected year: number, 
    private phrase: string) {
    this.title = title
    this.year = year
    this.phrase = phrase
  }

  get showFilm1() {
    return `Title: ${this.title}\nYear: ${this.year}\nPhrase: ${this.phrase}`
  }
}

const film1 = new Film1('Taxi Driver', 1976, 'You talking to me?')

console.log(film1.showFilm1)



/********************* Abstract - uma classe "modelo" para outras classes herdarem métodos. Muito parecido com Interface */
abstract class Feline {  
  protected abstract makeNoise(): void
}

class Lions extends Feline {
  makeNoise(): string {
    return 'Lions noise is roar'  
  }
}

class Cat extends Feline {
  makeNoise(): string {
    return 'Cats noise is meooooow'  
  }
}

console.log(new Lions().makeNoise())
console.log(new Cat().makeNoise())
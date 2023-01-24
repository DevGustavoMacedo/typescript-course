// decorator simples
function myDecorator() {
  console.log('No inicio do decorator')

  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('No meio do decorator')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class MyClass {
  @myDecorator()
  testing() {
    console.log('No final do decorator')
  }
}

const myObj = new MyClass()

myObj.testing()
console.log('****************************************')



// decorator multiplo (obs: executa primeiro o decorator mais próximo da função)
function decoratorA() {
  console.log('Inicio decorator A')

  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Meio decorator A')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

function decoratorB() {
  console.log('Inicio decorator B')

  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Meio decorator B')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class MultipleDecorators {
  @decoratorB()
  @decoratorA()
  testing() {
    console.log('No final do decorator')
  }
}

const multiple = new MultipleDecorators()

multiple.testing()
console.log('****************************************')



// class decorator (executado na ação do constructor)
// isso nos permite realizar algo personalizado ao instanciar um objeto de classe
function classDecorator(constructor: Function) {
  console.log(constructor)

  if(constructor.name === "Users1") {
    console.log('Criando usuário')
  }
}

@classDecorator
class Users1 {
  name

  constructor(name: string) {
    this.name = name
  }
}

const person1 = new Users1('Wilson')

console.log(person1)
console.log('**************************')



// method decorator
function methodDecorator(value: boolean) {
  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

@classDecorator
class Users2 {
  name

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator(false)
  showName() {
    console.log(this)
    return 'Seu nome é ' + this.name
  }
}

const person2 = new Users2('House')

console.log(person2.showName())
console.log('**************************')



// acessor decorator (serve apenas pra getters e settters)


class Users3 {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @methodDecorator(false)
  get showName() {
    return 'Seu nome é ' + this.name
  }

  @methodDecorator(true)
  get showAge() {
    return 'Sua idade é ' + this.age
  }
}

const person3 = new Users3('Fulano', 20)

console.log(person3)
console.log('**************************')



// property decorator (utilizado nos atributos de uma classe)
// muito usado para validações
function formatID() {
  return function(target: Object, propertKey: string) {
    
    let value: string

    const getter = () => value

    const setter = (newVal: string) => {
      value = newVal.padStart(5, '0')
    }

    Object.defineProperty(target, propertKey, { get: getter, set: setter })
  }
}

class ID {
  @formatID()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newID = new ID('15')

console.log(newID)
console.log(newID.id)
console.log('*******************************')

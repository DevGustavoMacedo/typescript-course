"use strict";
// campos em classes
class Person1 {
}
const person1 = new Person1();
person1.name = 'Kim';
person1.age = 30;
console.log(person1);
// constructor (instanciar com valores pré definidos)
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// const person2 = new Person2('Jimmy', '40')
const person2 = new Person2('Jimmy', 40);
console.log(person2);
// readonly em classe
class Person3 {
    constructor(name) {
        this.age = 42;
        this.name = name;
    }
}
let person3 = new Person3('Jorge Guzman');
person3.name = 'Lalo Salamanca';
// person3.age = 32     retorna erro pois é uma proprieade só de leitura
console.log(person3);
/************************ herança em classes *************************/
class Person4 {
    constructor(name) {
        this.name = name;
    }
}
class SuperHuman4 extends Person4 {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
}
const person4 = new Person4('Clark');
console.log(person4);
const superHuman4 = new SuperHuman4('Superman', 'Fly');
console.log(superHuman4);
/********************* Métodos (mesma coisa de funções) **********************/
class Person5 {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return 'Hello ' + this.name;
    }
}
const person5 = new Person5('Huel');
console.log(person5);
console.log(person5.greeting());
/********************* Getters - lê as propriedades da classe ****************/
/********************* Setters - modifica as propriedades da classe **********/
class Person6 {
    get showName() {
        return this.name;
    }
    // o setter só pode ter um parametro, mais que isso dá erro    
    // set modifyName(newName: string, age: number) {     
    set modifyName(newName) {
        // retorna erro pq o setter não pode retornar nada
        // return newName     
        this.name = newName;
    }
}
const person6 = new Person6();
// o get e set são acessados sem parenteses ()
person6.modifyName = 'Andy Bernard';
console.log(person6.showName);
console.log(person6);
class Cats {
    constructor(noise) {
        this.noise = noise;
    }
    makeNoise() {
        return 'Cats noise is ' + this.noise;
    }
}
class Dogs {
    constructor(noise) {
        this.noise = noise;
    }
    makeNoise() {
        return 'Dogs noise is ' + this.noise;
    }
}
const cat = new Cats('meow');
const dog = new Dogs('woof');
console.log(cat.makeNoise());
console.log(dog.makeNoise());
/**************** Override - classes filhas herdando métodos e os sobrescrevendo */
class Numbers {
    showNumbers(arr) {
        return arr;
    }
}
console.log(new Numbers().showNumbers([1, 2, 3, 4]));
class PairNumbers extends Numbers {
    showNumbers(arr) {
        return arr.filter(item => item % 2 === 0);
    }
}
console.log(new PairNumbers().showNumbers([1, 2, 3, 4]));
/**************** Visibilidade de propriedades e métodos
Public - acessível por qualquer classe que herdar (default)
Protected - acessível através de métodos pela classe que criou e pelas que herdaram
Private - acessível também por métodos e apenas pela classe que criou */
class Doja1 {
    constructor() {
        this.name = 'Doja Cat';
    }
}
class Doja2 extends Doja1 {
    constructor() {
        super(...arguments);
        this.phrase = 'say so';
    }
    saySO() {
        return 'Why don\'t you ' + this.phrase + '?';
    }
}
const doja2 = new Doja2();
console.log(doja2.name);
class Doja3 extends Doja2 {
    showPhrase() {
        return this.phrase;
    }
    showSaySO() {
        return this.saySO();
    }
}
const doja3 = new Doja3();
console.log(doja3.showPhrase());
console.log(doja3.showSaySO());
class Doja4 extends Doja3 {
    constructor() {
        super(...arguments);
        this.truth = 'Better than...';
    }
    theTruth() {
        return this.truth + 'Nicki';
    }
    get showTheTruth() {
        return this.theTruth();
    }
}
const doja4 = new Doja4();
// console.log(doja4.truth)   retorna erro, não dá pra acessar assim
// console.log(doja4.theTruth)    também dá erro pois o método é privado
console.log(doja4.showTheTruth);
class Doja5 extends Doja4 {
}
// console.log(new Doja5().truth)     não pode herdar algo privado
console.log(new Doja5().showTheTruth); // também dá porque o método é public
/* Static: permite acessar propriedades e métodos sem instanciar um objeto */
class User1 {
    constructor() {
        this.lastName = 'Varga';
    }
    static showFirstName() {
        return User1.firstName;
    }
    showLastName() {
        return this.lastName;
    }
}
User1.firstName = 'Nacho';
const user1 = new User1();
// console.log(User1.lastName)    não dá pra acessar sem instanciar
console.log(User1.firstName);
// console.log(user1.firsttName)
console.log(user1.lastName);
/* Generics aplicado as classes */
class User2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get showName() {
        return this.firstName + ' ' + this.lastName;
    }
}
const user2 = new User2('Nacho', 'Varga');
console.log(user2.showName);
/* Parameters Properties (um shorthand pras propriedades das classes) */
// dá pra encapsular uma classe numa variavel
const Film1 = class {
    constructor(title, year, phrase) {
        this.title = title;
        this.year = year;
        this.phrase = phrase;
        this.title = title;
        this.year = year;
        this.phrase = phrase;
    }
    get showFilm1() {
        return `Title: ${this.title}\nYear: ${this.year}\nPhrase: ${this.phrase}`;
    }
};
const film1 = new Film1('Taxi Driver', 1976, 'You talking to me?');
console.log(film1.showFilm1);
/********************* Abstract - uma classe "modelo" para outras classes herdarem métodos. Muito parecido com Interface */
class Feline {
}
class Lions extends Feline {
    makeNoise() {
        return 'Lions noise is roar';
    }
}
class Cat extends Feline {
    makeNoise() {
        return 'Cats noise is meooooow';
    }
}
console.log(new Lions().makeNoise());
console.log(new Cat().makeNoise());

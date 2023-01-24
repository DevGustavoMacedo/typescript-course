"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator simples
function myDecorator() {
    console.log('No inicio do decorator');
    return function (target, propertKey, descriptor) {
        console.log('No meio do decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log('No final do decorator');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
console.log('****************************************');
// decorator multiplo (obs: executa primeiro o decorator mais próximo da função)
function decoratorA() {
    console.log('Inicio decorator A');
    return function (target, propertKey, descriptor) {
        console.log('Meio decorator A');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function decoratorB() {
    console.log('Inicio decorator B');
    return function (target, propertKey, descriptor) {
        console.log('Meio decorator B');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MultipleDecorators {
    testing() {
        console.log('No final do decorator');
    }
}
__decorate([
    decoratorB(),
    decoratorA()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
console.log('****************************************');
// class decorator (executado na ação do constructor)
// isso nos permite realizar algo personalizado ao instanciar um objeto de classe
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === "Users1") {
        console.log('Criando usuário');
    }
}
let Users1 = class Users1 {
    constructor(name) {
        this.name = name;
    }
};
Users1 = __decorate([
    classDecorator
], Users1);
const person1 = new Users1('Wilson');
console.log(person1);
console.log('**************************');
// method decorator
function methodDecorator(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
let Users2 = class Users2 {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return 'Seu nome é ' + this.name;
    }
};
__decorate([
    methodDecorator(false)
], Users2.prototype, "showName", null);
Users2 = __decorate([
    classDecorator
], Users2);
const person2 = new Users2('House');
console.log(person2.showName());
console.log('**************************');
// acessor decorator (serve apenas pra getters e settters)
class Users3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return 'Seu nome é ' + this.name;
    }
    get showAge() {
        return 'Sua idade é ' + this.age;
    }
}
__decorate([
    methodDecorator(false)
], Users3.prototype, "showName", null);
__decorate([
    methodDecorator(true)
], Users3.prototype, "showAge", null);
const person3 = new Users3('Fulano', 20);
console.log(person3);
console.log('**************************');
// property decorator (utilizado nos atributos de uma classe)
// muito usado para validações
function formatID() {
    return function (target, propertKey) {
        let value;
        const getter = () => value;
        const setter = (newVal) => {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertKey, { get: getter, set: setter });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatID()
], ID.prototype, "id", void 0);
const newID = new ID('15');
console.log(newID);
console.log(newID.id);
console.log('*******************************');

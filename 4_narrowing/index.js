"use strict";
const sum = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return parseFloat(a) + parseFloat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return 'Aconteceu algum erro';
};
console.log(sum(2, 3));
console.log(sum('3', '3'));
console.log(sum(3, '2'));
// checar se valor existe
const operations = (arr, operator) => {
    if (operator) {
        if (operator === 'sum') {
            const result = arr.reduce((curr, acc) => curr + acc);
            return result;
        }
        else if (operator === 'multiply') {
            const result = arr.reduce((curr, acc) => curr * acc);
            return result;
        }
        return 'Operador não existe';
    }
    else {
        return 'Defina uma operação';
    }
};
console.log(operations([2, 3, 2], 'sum'));
console.log(operations([2, 2, 2], 'multiply'));
console.log(operations([2, 2]));
console.log(operations([2, 2], 'dfdfdfd'));
// instanceof (verificar pela instancia de classes)
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const user1 = new SuperUser('Jim Halpert');
const user2 = new User('Charles Miner');
console.log(user1, user2);
function greeting(user) {
    if (user instanceof SuperUser) {
        return `Hey ${user.name}, how's it hanging?`;
    }
    else if (user instanceof User) {
        return `Hello ${user.name}, you stupid moron!`;
    }
}
console.log(greeting(user1));
console.log(greeting(user2));
// operador 'in' (procura um valor ou propriedade)
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const dog1 = new Dog('Buddy', 'Beagle');
const dog2 = new Dog('Bob');
function showDog(dog) {
    if ('breed' in dog) {
        console.log(`The dog ${dog.name} is of the breed ${dog.breed}`);
    }
    else {
        console.log(`The dog ${dog.name} has no defined breed`);
    }
}
showDog(dog1);
showDog(dog2);
// desafio
function review(name, stars) {
    if (typeof stars === "number") {
        if (stars > 3)
            return `${name} gostou muito desse filme, deu ${stars} estrelas.`;
        else if (stars < 3)
            return `${name} não gostou desse filme, deu ${stars} estrela(s).`;
        else if (stars === 3)
            return `${name} deu ${stars} estrelas. Filme mediano, igual minha vida.`;
        else
            return 'Nota inválida';
    }
    else if (typeof stars === "boolean") {
        return name + ' não deu nota';
    }
    else {
        return 'Dado incorreto';
    }
}
console.log(review('Jake', 5));
console.log(review('Jake', 3));
console.log(review('Jake', 1));

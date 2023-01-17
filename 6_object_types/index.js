"use strict";
const product = (product) => {
    if (product.isAvailable) {
        return product.name + ' está disponível e custa R$' + product.price;
    }
    return product.name + ' custa R$' + product.price;
};
const shoe = {
    name: 'Jordan',
    price: 22000
};
const shirt = {
    name: 'Brutal Kill',
    price: 320,
    isAvailable: true
};
console.log(product(shoe));
console.log(product(shirt));
let user = { name: 'David', level: 2 };
const showUser = (user) => {
    // user.level = 1     Cannot assign to 'level' because it is a read-only property.
    return user.name + ' nível ' + user.level;
};
console.log(showUser(user));
let numbers = {
    number: 1,
    text: '1'
};
console.log(numbers);
const person = {
    name: 'Djalminha'
};
const hero = {
    name: 'Ribamar',
    superPowers: ['Super chute', 'Super cabeçada']
};
console.log(person);
console.log(hero);
const goku = {
    name: 'Goku',
    superPowers: ['Kamehameha', 'Genki Dama']
};
console.log(goku);
// ReadOnlyArray (não permite alterar por atribuição direta, apenas por métodos)
let juices = ['Apple', 'Grape', 'Orange'];
// juices[0] = 'Green Apple'    Retorna erro
juices = juices.map(item => {
    if (item === 'Apple')
        return 'Green Apple';
    return item;
});
console.log(juices);
// const arr1: sumArrays = [1, 2]     Dá erro pois falta um número
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const arrSum = arr1.map((arr, index) => arr + arr2[index]);
console.log(arrSum);

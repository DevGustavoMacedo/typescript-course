"use strict";
// generics
const showMessage = (name) => 'Hello, ' + name;
console.log(showMessage('James Bond'));
// constraint (limitar o Generics)
function showPerson(obj) {
    console.log('Hi, ' + obj.nickName);
}
showPerson({ nickName: 'Butcher', realName: 'William' });
const car = {
    wheels: 4,
    wings: false,
    name: 'Honda'
};
console.log(car);
const boat = {
    wheels: false,
    wings: false,
    name: 'Slice of Life'
};
console.log(boat);
// type parameters (utilizar uma chave de um objeto como parâmetro no generic)
function getKey(obj, key) {
    return 'The Key is ' + obj[key];
}
const server = {
    name: (Math.random() + 1).toString(36).substring(2),
    hash: Math.trunc(Math.random() * 1001)
};
// console.log(getKey(server, 'id'))    retorna erro pois não existe esse campo
console.log(getKey(server, 'name'));
console.log(getKey(server, 'hash'));
function showData(obj, key) {
    return obj[key];
}
const somePerson = {
    name: 'Jeremias',
    age: 33
};
// console.log(showData(somePerson, 'id'))    retorna erro, campo não existe
console.log(showData(somePerson, 'name'));
function showName(name) {
    return name;
}
const firstName = 'Billy';
// typeof type: tipar pelo tipo de outra variavel. Não entendi a utilidade disso
const obj1 = {
    name: 'Kane',
    age: 44
};
console.log(obj1);
const obj2 = {
    name: 'Kratos',
    age: '99'
};
console.log(obj2);
const human = {
    name: 'Satan',
    sayajinName: false
};
console.log(human);
const goku = {
    name: 'Goku',
    powers: ['kamehameha'],
    sayajinName: 'Kakarot'
};
console.log(goku);

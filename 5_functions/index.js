"use strict";
// callback (uma função que chama outra função) como parâmetro de função (wtf kkkk)
function greeting(name, hello = 'Olá ') {
    // ele faz a inferencia do tipo de 'hello' pelo valor
    return hello + name;
}
function preGreeting(fn, username) {
    console.log('Bom dia');
    console.log(fn(username));
}
preGreeting(greeting, 'Michael Scarn');
// Generics - normalmente se usam as letras T, U, V
// Quando você aceita vários tipos, ou não sabe qual tipo vai vir
// Imagina como se pudesse usar a mesma função, mas de forma genérica, aceitando qualquer tipo
// Diferente do 'any' você consegue tornar o parâmetro flexivel, mas ainda limitado  
const showArray = (arr) => {
    return arr[0];
};
const stringArray = showArray(['1', '2', '3']); // o tipo da const é string
const numberArray = showArray([1, 2, 3]); // o tipo da const é number
// também pode explicitar o tipo
const numberArray2 = showArray([1, 2, 3]); // o tipo da const é number
console.log(stringArray);
console.log(numberArray);
const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
console.log(mergeObjects({ name: 'Andrew' }, { age: 33 }));
// constraints (limitar o Generics com Union)
const bigger = (a, b) => +a > b ? a : b;
console.log(bigger(2, 3));
console.log(bigger('4', '5'));
// outra forma de fazer isso
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
const mergedArrays = mergeArrays([1, 2, 3], ['1', '2', '3']); // o tipo da const é string
console.log(mergedArrays);
const product = ({ name, price }) => name + ' custa R$' + price;
console.log(product({ name: 'Sabonete', price: 3.21 }));

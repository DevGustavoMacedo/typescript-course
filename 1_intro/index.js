var firstName = 'Guga';
var wrongName = 1;
function greeting(name) {
    return "Hello ".concat(name);
}
console.log(greeting(firstName));
// console.log(greeting(wrongName))
function sum(a, b) {
    return "".concat(a, " + ").concat(b, " = ").concat(a + b);
}
console.log(sum(2, 3));

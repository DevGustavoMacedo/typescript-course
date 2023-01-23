"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet")); // pode mudar o nome da função pois só exporta ela
const calculator_1 = require("./calculator");
const cats_1 = __importDefault(require("./cats"));
const dogs_1 = __importDefault(require("./dogs"));
console.log((0, greet_1.default)());
console.log((0, calculator_1.sum)(2, 1));
console.log((0, calculator_1.multiply)(2, 1));
console.log((0, calculator_1.minus)(2, 1));
console.log(dogs_1.default.makeNoise());
const cat = new cats_1.default('Felix', 'meow');
console.log(cat.makeNoise());

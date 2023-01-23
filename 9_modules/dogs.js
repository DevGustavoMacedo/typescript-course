"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dogs {
    constructor(name, noise) {
        this.name = name;
        this.noise = noise;
    }
    makeNoise() {
        return 'Dogs noise is ' + this.noise;
    }
}
const dog = new Dogs('Bob', 'woof');
exports.default = dog;

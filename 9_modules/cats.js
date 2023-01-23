"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cats {
    constructor(name, noise) {
        this.name = name;
        this.noise = noise;
    }
    makeNoise() {
        return 'Cats noise is ' + this.noise;
    }
}
exports.default = Cats;

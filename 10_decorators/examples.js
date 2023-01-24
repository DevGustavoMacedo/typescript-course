"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
// method decorator
function checkUserLiked() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[0] === true) {
                console.log('You already liked');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
// property decorator
function maxChars(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = () => value;
        const setter = (newValue) => {
            if (newValue.length > limit) {
                console.log(`O post deve ter no máximo ${limit} caracteres`);
                return;
            }
            else {
                value = newValue;
                console.log('Post feito');
            }
        };
        // EU ACHO QUE É AQUI
        Object.defineProperty(target, propertyKey, { get: getter, set: setter });
    };
}
let Posts = class Posts {
    constructor(post) {
        this.liked = false;
        this.post = post;
    }
    like(alreadyLiked) {
        this.liked = true;
        console.log('User liked');
    }
};
__decorate([
    maxChars(20)
], Posts.prototype, "post", void 0);
__decorate([
    checkUserLiked()
], Posts.prototype, "like", null);
Posts = __decorate([
    createdDate
], Posts);
const post1 = new Posts('Algum post');
post1.like(post1.liked);
post1.like(post1.liked);
console.log(post1);
const post2 = new Posts('Outro post');
console.log(post2);
const post3 = new Posts('Post muito longoooooooooo');
console.log('*****************************************');

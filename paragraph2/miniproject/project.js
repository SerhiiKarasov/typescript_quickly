"use strict";
exports.__esModule = true;
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return 'Hello, ' + this.name;
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return 'deep: ' + howDeep;
    };
    return Fish;
}());
var dog = new Dog('mejor');
console.log("dog is talking to you:  " + dog.sayHello());
var fish = new Fish('disculpa');
console.log("fish is diving:  " + fish.dive(6));
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return "dog is talking to you:  " + dog.sayHello();
    }
    else if (pet instanceof Fish) {
        return "fish is diving:  " + fish.dive(6);
    }
    return 'our pet is not a pet';
}
console.log(talkToPet(dog));
console.log(talkToPet(fish));
console.log(talkToPet({ name: 'atata' }));

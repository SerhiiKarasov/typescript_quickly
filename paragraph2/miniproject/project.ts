class Dog {
	constructor(readonly name: string) {
		this.name = name;
	}
	sayHello() {
		return 'Hello, ' + this.name;
	}
}
class Fish {
	constructor(readonly name: string) {
		this.name = name;
	}
	dive(howDeep: number): string {
		return 'deep: ' + howDeep;
	}
}
let dog = new Dog('mejor');
console.log(`dog is talking to you:  ${dog.sayHello()}`);
let fish = new Fish('disculpa');
console.log(`fish is diving:  ${fish.dive(6)}`);

export type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
	if (pet instanceof Dog) {
		return `dog is talking to you:  ${dog.sayHello()}`;
	} else if (pet instanceof Fish) {
		return `fish is diving:  ${fish.dive(6)}`;
	}
	return 'our pet is not a pet';
}

console.log(talkToPet(dog));
console.log(talkToPet(fish));
console.log(talkToPet({ name: 'atata'})); // problem here as this type has no function dive

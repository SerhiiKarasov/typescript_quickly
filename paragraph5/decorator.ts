function whoAmI(target: Function): void {
	console.log(`You are : \n ${target}`);
}

@whoAmI
class Friend {
	constructor(private name: string, private age: number) {}
}

function UIcomponent(html: string): void {
	console.log(`The decorator received ${html} \n`);

	return function(target: Function) {
		console.log(`Someone wants to create a UI component from \n ${target} `);
	};
}

@UIcomponent('<h1>Hello Shopper!</h1>')
class Shopper {
	constructor(private name: string) {}
}

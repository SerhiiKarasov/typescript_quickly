abstract class Person {
	constructor(public name: string) {}

	changeAddress(newAddress: string) {
		console.log(`changeAddress ${newAddress}`);
	}
	giveDayOff() {
		console.log(`giveDayOff`);
	}

	promote(percent: number) {
		this.giveDayOff();
		this.increasePay(percent);
		console.log(`promote ${percent}`);
	}

	abstract increasePay(percent: number);
}

class Employee extends Person{
    increasePay(percent: number){
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}

class Contractor extends Person{
    increasePay(percent: number){
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);    }
}


const workers: Person[] = [];
workers[0] = new Employee('John');
workers[1] = new Contractor('Mary');
workers.forEach(worker => worker.promote(5));
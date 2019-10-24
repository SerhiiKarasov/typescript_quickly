class Person {
    public firstName: string;
    public lastName: string;
    private age: number;
    
    protected sayHello(): string{
      return `My name is ${this.firstName} ${this.lastName}`;
  }
  
  class Employee extends Person {
    department: string;
    
    reviewPerformance(): void{
      this.sayHello();
      this.increasePay(5);
    }
    increasePay(percent: number): void{
    //   return percent*1000* 0.22 * this.age();//it will not compile as age is 
    }
  }
  
  const emp = new Employee();
  console.log(emp.increasePay(5));
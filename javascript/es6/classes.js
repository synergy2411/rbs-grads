class Student{
 
    constructor(fname, age){
        this.fname = fname;
        this.age = age;
    }

    sayHello(){
        // console.log("Hello, I'm " + this.fname + "\nI'm " +this.age+" years old!")
        console.log(`Hello, I'm ${this.fname}, I'm ${this.age} years old!`)
    }
    
}

let foo = new Student("Foo", 32);
foo.sayHello();

// any, void, enum
{
    // building block of OOP ---> Inheritance =uttoraDhiKari
    // in class jar theke pai se =parent class & je pai se =child class

    class Person{
        name:string;
        age:number;
        address:string;

        constructor(name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

    }


    class Student extends Person{
        constructor(name:string, age:number, address:string){
           super(name,age,address)
        }

    }

    const student1 = new Student('mr.bibo', 18, 'dhaka')
    

    class Teacher extends Person{
        
        designation : string;

        constructor(name:string, age:number, address:string, designation : string){
            super(name,age,address)
            this.designation = designation;
        }

        takeClass(numOfClasses : number){
            console.log(`${this.name} will sleep for ${numOfClasses}`);
        }
    }
    const teacher1 = new Teacher('mr.nick', 58, 'dhaka', 'english teacher')
   teacher1.









    // 
}
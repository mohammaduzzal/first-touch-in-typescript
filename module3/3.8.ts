{
    // building block OF OOP ==Polymorphism(place,time,situation er upor vittio kore alada alada out jodi kono method dei setai polymorphism)

    class Person {
        getSleep(){
            console.log('i am sleeping for 8 hours');
        }
    }

    class Student extends Person{
        getSleep() {
            console.log('i am sleeping 7 hours');
        }
    }
    class Developer extends Person{
        getSleep() {
            console.log('i am sleeping 6 hours');
        }
    }

    const getSleepingHours = (param : Person)=>{
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)


    class Anonymous{
        speak(){
            console.log('I am a anonymous');
        }
    }

    class Staro extends Anonymous{
        speak() {
            console.log('I a student.I am study');
        }
    }

    class Teacher extends Anonymous{
        speak(): void {
            console.log('I am a teacher.I tech');
        }
    }

    const introduction = (param : Anonymous)=>{
        param.speak()
    }

    const p1 = new Anonymous();
    const p2 = new Staro();
    const p3 = new Teacher();

    introduction(p1);
    introduction(p2);
    introduction(p3);


    class SchoolMember{
        work(){
            console.log('working at school');
        }
    }

    class Cleaner extends SchoolMember{
        work(){
            console.log('cleaning the school');
        }
    }

    class Principle extends SchoolMember{
        work(){
            console.log('managing the school');
        }
    }

    const DutiesOfMember = (param : SchoolMember)=>{
        param.work();
    }

    const m1 = new SchoolMember();
    const m2 = new Cleaner();
    const m3 = new Principle();

    DutiesOfMember(m1)
    DutiesOfMember(m2)
    DutiesOfMember(m3)

// -------------------------------
    class Shape{
        getArea() : number{
            return 0
        }
    };

    class Circle extends Shape{
        radius : number;

        constructor(radius : number){
            super()
            this.radius = radius
        }


        getArea(): number {
             return Math.PI * this.radius *this.radius
        }
    };

    class Rectangle extends Shape{
        height : number;
        width : number;

        constructor(height:number, width:number){
            super()
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width
        }
    }


    const getShapeArea = (param : Shape) =>{
        console.log(param.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(12,5);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)











    // 
}
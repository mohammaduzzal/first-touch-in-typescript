{
    // oop first fundamental ==class;
    class Animal{
    //   public  name:string; //key gula =class property/key.
    //   public  species:string;
    //   public  sound: string;

    //   parameter properties used here;
        constructor(public name: string, public species:string, public sound:string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        // anonymous func
        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`); //class er vitor func ke method bole.class er vitor normal func likhte hoy .arrow func a (this ) kaj kore na
        }
    }

    const dog = new Animal("german shepard", "dog","bark bark");
    const cat = new Animal("che ha", "cat", "mew mew");
    dog.makeSound();
    cat.makeSound();


    class Person {
    constructor(public name: string, public age: number, public address : string){}
    callPerson(){
        console.log(`the person name ${this.name}`);
    }
    }
    const Ronif = new Person("Bibo ronif", 24, "sirajgonj")
    Ronif.callPerson()


    








    
    // 
}
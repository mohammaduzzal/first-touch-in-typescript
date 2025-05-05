{
    //type guard --> instance of ---> use in obj
    class Animal {
        name:string;
        species : string;

        constructor(name:string,species:string){
            this.name = name;
            this.species = species;
        };
        makeSound(){
            console.log('i am making sound');
        };
    }; 

    class Dog extends Animal{
        constructor(name:string,species : string){
            super(name,species)
        }
        makeBark(){
            console.log('i am barking');
        }
    }
    class Cat extends Animal{
        constructor(name:string,species : string){
            super(name,species)
        }
        makeMew(){
            console.log('i am mewing');
        }
    };

    // smart dev ra je vabe instanceof handle kore
    const isDog =(animal : Animal) : animal is Dog  =>{
        return dog instanceof Dog
    };
    const isCat =(animal : Animal) : animal is Cat =>{
        return dog instanceof Cat
    };


    const getAnimal =(animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog('bull dog', 'german shes'); //Dog er instance hocce dog
    const cat = new Cat('ketty','vik'); //Cat er instance hocce cat

    getAnimal(dog)
    







    // 
}
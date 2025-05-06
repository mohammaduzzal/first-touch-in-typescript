{
    // Abstraction : dui vabe kora jai---> using interface and using abstract

    // abstraction with interface

    // idea
    interface Vehicle1{
        startEngine() : void;
        stopEngine() :void;
        move() : void
    };

    // const vehicle1 : Vehicle1 ={  //obj
    //     name:'toyota',
    //     model: 55
    // };

    // real implement
    class Car1 implements Vehicle1{ // :Vehicle1 for obj & implements for class

        startEngine(): void {
            console.log('i am start the engine');
        }
        stopEngine(): void {
            console.log('i am stopping the engine');
        }
        move(): void {
            console.log('i am moving in the car');
        }

        test(){
            console.log('i am just testing');
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine()


    // abstraction with abstract class(leader class)
    // idea
   abstract class Car2{
      abstract startEngine(): void ;
      abstract stopEngine(): void ;
      abstract move(): void ;
        test(){
            console.log('i am just testing');
        };

    }

    // implementation

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log('i am going to str the engine');
        };
        stopEngine(): void {
            console.log('i am going to stp the engine');
        };
        move(): void {
            console.log('i am going to move th car');
        }
    }


    const hondaCar = new ToyotaCar() //Cannot create an instance of anAbstract class just follow
    hondaCar.move();














    // 
}
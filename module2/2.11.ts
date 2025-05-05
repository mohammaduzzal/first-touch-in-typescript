{
    //
    // utility type
    // pick

    type Person ={
        name:string;
        age:number;
        email?:string;
        contact: string;
    };

    // Pick<>

    type NameAge = Pick<Person, "name" | "age">;

    // Omit<>
    type ContactInfo = Omit<Person,"name" | "age">;

    // Required<>
    type PersonRequired = Required<Person>;

    // Partial<>
    type PersonPartial =Partial<Person>;

    // Readonly

    type PersonReadOnly = Readonly<Person>
    const person1 : PersonReadOnly = {
        name:"y",
        age: 50,
        contact: '65631212',
    };

    person1.name ='mr.z';

    // RECORD
    // type MyObj={ //obj er key gula str type and array index gula number type
    //     a:string; 
    //     b:string;
    // };
    type MyObj = Record<string,string>
    const obj1 : MyObj = {
        a:'aa',
        b:'bb',
        c:'cc',
        d:'dd',
    }

    const EmptyObj : Record<string,unknown> = {} //important for project
    EmptyObj.name


    
    





    // 

}
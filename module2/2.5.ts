{
    // 
    // generic with func

    const createArray = (param : string) : string[] =>{
        return [param]
    }

    const res1 = createArray('bangladesh')

    const createArrayWithGeneric = <T>(param : T) : T[] =>{
        return [param]
    }
    const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGeneric1 = createArrayWithGeneric<string>('bangladesh')

    interface User{
        id:number;
        name:string
    }
    const resGeneric2 = createArrayWithGeneric<User>({id : 1, name: 'brie'})




// tuple generic func

    const createArrayWithTuple = <T, Q>(param1 : T, param2 : Q) : [T, Q] =>{
        return [param1, param2]
    }
    const resTuple = createArrayWithTuple<boolean,string>(true,'l')
    const resTuple1 = createArrayWithTuple<string,number>('bangladesh',54)

    interface User{
        id:number;
        name:string
    }
    const resTuple2 = createArrayWithTuple<number,User>(10,{id : 1, name: 'brie'})


    const addStudentToCorse = <T>(student: T) =>{
        const course = 'next level web development'
        return{
            ...student,
            course
        }
    };

    const student1 = addStudentToCorse({name: 'mr.x',email : 'a@b.com',devType:'next level developer'})
    const student2 = addStudentToCorse({name: 'mr.y',email : 'ab@b.com',hasWatch:'Apple Watch'})





    // 
}
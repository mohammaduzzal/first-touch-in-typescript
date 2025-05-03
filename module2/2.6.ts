{
    // 
    // constrains = force kora (jokhon tumi kisu enforce korba)

    const addStudentToCorse = <T extends {id : number; name: string; email:string;}>(student: T) => {
        const course = 'next level web development'
        return {
            ...student,
            course
        }
    };

    const student1 = addStudentToCorse <{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 1,
         name: 'mr.x',
         email: 'a@b.com', 
         devType: 'next level developer' 
        });

    const student2 = addStudentToCorse({
        id:2,
         name: 'mr.y', 
         email: 'ab@b.com', 
         hasWatch: 'Apple Watch' 
        });
        
        cosnt student3 = addStudentToCorse({emni:'enmi'})





    // 
}
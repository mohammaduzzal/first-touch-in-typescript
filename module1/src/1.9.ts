{
    // type alias
    // -------------object
    type Student = {
        name:string;
        age: number;
        gender : string;
        contactNo ?: string;
        address: string;
    }


    const student1 :Student ={
        name:'bright',
        age: 25,
        gender: 'male',
        contactNo: '176412154',
        address: 'dhaka'

    }

    const student2 :Student = {
        name: 'bibo',
        age : 26,
        gender : 'male',
        address : 'ctg',
    }
    const student3 : Student = {
        name: 'bib',
        age : 26,
        gender : 'male',
        address : 'ti',
    }

    // ----------------str
    type UserName = string
    const userName :UserName = 'bright'

    // -------------bool
    type IsAdmin = boolean
    const isAdmin : IsAdmin = true

    // ----------------func
    type Add = (num1 : number, num2: number) => number
    const add : Add = (num1,num2) => num1 + num2




}
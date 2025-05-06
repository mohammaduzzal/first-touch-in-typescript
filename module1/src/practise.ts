{
    // 
    type Welcome = string;

    const welcome : Welcome = 'Hello World, I will complete this course successfully and become a Next level Web Developer!';
    // console.log(welcome);

type Action = (name : string,age : number, role?:'admin'|'user'|'guest') => object
    const action : Action = (name, age, role) =>{
        return{name,age,role}; 
    }
  const result =   action('bright', 25,'user')
//   console.log(result);


// task 3

type Person={
    name : 'mr.x';
    address : string;
    hairAndEyeColor : string;
    income:number;
    expense:number;
    hobbies : string[];
    familyMember : number;
    job:string;
    skills:string;
    maritalStatus : 'single';
    friends:string[];
}

const person : Person ={
    name : 'mr.x',
    address : 'dhaka',
    hairAndEyeColor : 'black',
    income:5000,
    expense:4000,
    hobbies : ['reading'],
    familyMember :4,
    job:'unemployed',
    skills:'web development',
    maritalStatus :'single',
    friends:['roh','lil','pik'],

}

// console.log(person);

// task 4 
interface Book {
    name:string;
    price : number;
    page: number;
};
interface Magazine{
    name : string;
    price:number;
    publisher:string;
};

type SelectedUnion = Book | Magazine;
type SelectedIntersection = Book & Magazine;


// task 5 
function reverseString(param : string) : string{
    return param.split("").reverse().join('')
}

const res = reverseString('hello')
// console.log(res);

// task 6

function rest(...numbers :number[]) : number{
    return numbers.reduce((a,b) => a + b)
}

const res1 = rest(1,2,3,4,5,6,7)
// console.log(res1);


// task 7 type assertion and narrowing
function assertionNarrowing(param : string | number) :number | undefined{
    if(typeof param === 'string'){
        return param.length
    }else if(typeof param === 'number'){
        return param * param
    }
}

const acc = assertionNarrowing(2);
// console.log(acc);


// task 8 
type User ={
    name:string;
    email : string;
};

type Admin ={
    name:string;
    email:string;
    adminLevel:string;
}

type AdminUser = User & Admin;
function describeAdmin(user : AdminUser) : string{
    return `the name is ${user.name} email is ${user.email} and role is ${user.adminLevel}`
}
const adminUser :AdminUser = {
    name:'mr.x',
    email:'a@b.com',
    adminLevel:'admin'
}
const ad = describeAdmin(adminUser)
console.log(ad);




   






    // 
}
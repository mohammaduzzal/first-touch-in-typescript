{
    // 
    // interface,type vs interface (type er khalato vai holo interface)

//    "the way we declare type"
type User1 ={
    name : string;
    age : number;
};
const user1 : User1 ={
    name : 'bright',
    age : 52,
};


// "the way we declare interface"
interface User2 {
    name : string;
    age : number;
};
const user2 : User2 = {
    name : 'bright',
    age : 87,
};


//how to  extend with type and interface
//  type extend
type Customer = {
    name: string;
    age: number;
};

type CustomerWithRole = Customer & {role : string};

const customer : CustomerWithRole ={
    name: 'bi bo',
    age:77,
    role: 'buyer'
};

// interface extend
interface Seller {
    name:string;
    age:number;
};
interface SellerWithRole extends Seller {
    role : string
};

const seller : SellerWithRole ={
    name:'vik',
    age:99,
    role:'user'
};


// in js object --> array o object, func o object .so we could use interface here.

// how we declare array with type and interface

// type--->
type Roll1 = number[];
const rollNumber1 : Roll1 = [1,2,3];

// interface
interface Roll2{
    [index : number] : number
};
const rollNumber2 : Roll2 = [5,5,6];

//  how we declare func with type and interface
//func with  type
type Add1 = (num1 : number , num2 : number) => number;

const add1 : Add1 = (num1,num2) => num1 + num2;

//func with interface
interface Add2{
    (num1 : number, num2: number) : number
};
const add2 : Add2 = (num1 , num2) => num1 + num2;







    

    







    // 
}
{
    // 
    // generics =generalized kora(kono akta type ke generalized korte pari mane dynamic vabe je kono somoy ye amader need onujayi amra type make korte pari and seta ke reuse orte pari setai amader generics type)
    // generic with type

    type GenericArray<T> = Array<T> //company te param er bodole "T" likhe


    // const rollNumber : number[] = [2,3,4];
    const rollNumber : GenericArray<number> = [2,3,4]; //

    // const students : string[] = ['b','c','d'];
    const students : GenericArray<string> = ['b','c','d'];

    // const boolArray : boolean[] = [true,false,true];
    const boolArray : GenericArray<boolean> = [true,false,true];

    type User = {
        name:string;
        age:number;
    }
    interface UserInterface{
        name:string;
        age:number;
    }


    const user : GenericArray<UserInterface> = [
        {
            name:'b',
            age: 55,
        },
        {
            name:'c',
            age: 45,
        },
    ]; //array of object with generic



    // generic tuple (special type of array=two or three maintain the order)
    type GenericTuple<X,Y> = [X,Y];
    const manush :GenericTuple<string,string> = ['mr.x','mrs.y'];

    const userWithId : GenericTuple<number,{name:string,email:string}> =[1234,{name:'b', email:'a@b.com'}];










    // 

}
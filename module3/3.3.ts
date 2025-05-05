{
    // type guard /type narrowing(typeof & in) typeGuard useIn obj&func 

    // there are many way to declare type guard
    // 1. typeof ---> type guard -->execution will happened in run time

    // in this we just use guard in func

    type AlphaNumeric = string | number;

    const add = (param1 :AlphaNumeric, param2 : AlphaNumeric) : AlphaNumeric =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2
        }else{
            return param1.toString() + param2.toString()
        }
    };
    const result1 = add("2","5");
    console.log(result1);

    // 1. in ---> type guard --> will work with object
    type NormalUser ={
        name:string
    };
    type AdminUser = {
        name:string;
        role : "admin"
    };

    const getUser = (user : NormalUser | AdminUser) =>{
        if("role" in user){
            console.log(`my name is ${user.name} & my role is ${user.role}`);
        }else{
            console.log(`my name is ${user.name} & i am a normal user`);
        }
    };

    const normalUser : NormalUser = {
        name: 'bright'
    }
    const adminUser : AdminUser={
        name:"jm vi",
        role:"admin"
    }


    const res1 = getUser(normalUser);
    const res2 = getUser(adminUser);






    // 
}
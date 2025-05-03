{
    //  

    // ternary operator | optional chaining | nullish coalescing

    const age : number = 18
    if(age >= 18){
        console.log('adult');
    }else{
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult});

    // nullish coalescing operator
    //  undefined / null ---> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    console.log({result1});


    // optional chaining
    type User = {
        name : string;
        address : {
            city: string;
            road: string;
            presentAddress : string;
            permanentAddress ?: string
        }
    }

    const user : User = {
        name:'bright',
        address:{
            city: 'siraj',
            road:'victoria',
            presentAddress:'sir'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'no permanent address'
    console.log({permanentAddress});


    // 
}
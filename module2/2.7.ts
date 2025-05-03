{
    // 

    // generic  constraint with keyof operator
    type Vehicle = {
        bike:string;
        car:string;
        ship:string;
    };

    type Owner1 ='bike' | 'car' | 'ship'; //manually 
    type Owner2 = keyof Vehicle //jodi amr kokhono need hoy akta type er key gula ke diye amra arokom union | kore amra str literal union type make korbo se khetre amra (keyof operator)use korte pari;

    // obj er key-value gula func er maddhome pete chai

    const user = {
        name:'bright',
        age:25,
        address : 'sirajgong'
    };

    user.name //'bright
    user['name'] //bright

    const getPropertyValue = <X,Y extends keyof X>(obj:X,key:Y) =>{
        return obj[key]
    }

    const person ={
        name:'bibo',
        age:26,
        address: "dha"
    };
    const res1 = getPropertyValue(person,'name');











    // 
}
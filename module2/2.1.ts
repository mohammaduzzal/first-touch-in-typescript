{
    // 
    // type assertion/type narrowing (tumi amr theke behi bujho=mane ami typescript er theke type vlo bujhi atai type assertion)

    let anything : any;

    anything = 'next level web development';
    anything = 555;

    (anything as number).



    const kgToGm = (value : string | number) : string | number | undefined =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) *1000;
            return `the converted value is ${convertedValue}`
        }
        if(typeof value === 'number'){
            return value *1000;
        }
    }


    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('5000') as string;


    type CustomError = {
        message : string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }




    // 
}
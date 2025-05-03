{
    // 
    // nullable type
    const searchName =(value : string | null)  =>{
        if(value){
            console.log('searching');
        }else{
            console.log('there is nothing to search');
        }
    }
    searchName(null)

    // unknown typeof

    const getSpeedInMeterPerSec = (value : unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }

       else if(typeof value === 'string'){
            const [result,unit] = value.split(" ")
            // console.log(result);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else{
            console.log('wrong input');
        }
    }
    getSpeedInMeterPerSec(null)

    // never type  //this func never return sth .it just throw an error .that why its never type
    const throwError = (msg : string) : never =>{
        throw new Error(msg)
    }
    throwError('muskil se error ho gaya')




    // 
}
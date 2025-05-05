{
    //
    // map type
    const arrOfNum : number[] = [1,2,3,4];
    
    // const arrOfStr : string[] = ['1','2','3'] 

    const arrOfStr: string[] = arrOfNum.map((num) => num.toString())
    console.log(arrOfStr);


    // map type start

    type AreaNum = {
        height: number;
        width:number;
    };

    type Height = AreaNum['height']; //lookup type

    // type AreaStr ={ //atai amra korbo map type er help niye;
    //     height: string;
    //     width:string;
    // }
    



    // moner moto customize korte
    type arrOfStr<T> ={
        [key in keyof T] : T[key]
    }

    const area1 : arrOfStr<{height:string;width:number}>={
        height:'100',
        width:50,
    }







    // 

}
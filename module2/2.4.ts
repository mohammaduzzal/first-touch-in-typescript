{
    // 
    // generic with interface
    interface Developer<T, X = null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseDate : number;
        }
        smartwatch : T;
        bike?: X
    };
    type AmuletWatch ={
        brand:string;
        model:string;
        display:string;
    }

    const poorDeveloper : Developer<AmuletWatch> = {
        name:'bright',
        computer:{
            brand:'hp',
            model:'core i5',
            releaseDate:2009,
        },
        smartwatch:{
            brand:'amulet',
            model:'br10',
            display:'OL ED'
        }
    };


    interface AppleWatch {
        brand:string;
        model:string;
        heartTrack : boolean;
        sleepTrack: boolean;
    }

    interface RoyalEnfieldBike {
        model:string;
        engineCapacity:string;

    }
    const richDeveloper : Developer<AppleWatch, RoyalEnfieldBike> = {
        name:'ole',
        computer:{
            brand:'asus',
            model:'core5',
            releaseDate:2019,
        },
        smartwatch:{
            brand:'apple',
            model:'b10',
            heartTrack : true,
            sleepTrack : true,
        },
        bike:{
            model:'royal enfield',
            engineCapacity:'300cc',
        }
    };







    // 
}
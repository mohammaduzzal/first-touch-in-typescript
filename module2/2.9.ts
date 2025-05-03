{
    // conditional type=(majhe majhe lagt pare)
    // jodi kono type er man ta onno kono type er upor nirvor kore kono akta condition er upor vitti kore setai conditional type
    type A1 = null;
    type B1 = boolean;

    type X = A1 extends null ? true : false; //here X is condition al type .its depend on A1 type.
    type Y= A1 extends string ? true : B1 extends undefined ? undefined : any;


    type Sheikh = {
        car:string;
        bike:string;
        ship:string;
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasCar = CheckVehicle<'car'>
  type HasBike = CheckVehicle<'bike'>
  type HasShip = CheckVehicle<'ship'>







    // 
}
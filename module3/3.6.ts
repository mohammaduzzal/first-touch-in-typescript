{
    // getter and setter (likhbo propertyr moto kore kaj korbe func moto)
    class BankAccount{
        id:number;
        name:string;
      protected _balance : number; //private dile child a _balance pawa jabe na tai child a pete hole private er jat vai "protected"use korte hobe 

        constructor(id:number,name:string,balance:number){
            this.id= id;
            this.name = name;
            this._balance=balance 
        }

    //  public   addDeposit(amount : number){
    //         this._balance = this._balance + amount
    //     }

    set deposit(amount : number){
        this._balance = this.balance + amount
    }


    //   public  getBalance(){
    //         return this._balance
    //     }

    // getter
    get balance(){
        return this._balance
    }

    };
    const goribManushErAccount =new BankAccount(512,'MR.X',20);
    // goribManushErAccount._balance = 2
    // goribManushErAccount.addDeposit(88)
    const res1 = goribManushErAccount.deposit =50;
    console.log(res1);


    // const res2 = goribManushErAccount.getBalance(); //func call kore
    const res2 = goribManushErAccount.balance; //getter use kore (property r moto kore)
    console.log(res2);










    // 
}
{
    // access modifier =public(default) and private
    class BankAccount{
        id:number;
        name:string;
      protected _balance : number; //private dile child a _balance pawa jabe na tai child a pete hole private er jat vai "protected"use korte hobe 

        constructor(id:number,name:string,balance:number){
            this.id= id;
            this.name = name;
            this._balance=balance 
        }

     public   addDeposit(amount : number){
            this._balance = this._balance + amount
        }

      private  getBalance(){
            return this._balance
        }

        hiddenMethod(){
            return this.getBalance()
        }
    };


    class Student extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribManushErAccount =new BankAccount(512,'MR.X',20);
    // goribManushErAccount.balance = 2
    goribManushErAccount.addDeposit(88)
    const res2 = goribManushErAccount.getBalance();
    console.log(res2);








    // 
}
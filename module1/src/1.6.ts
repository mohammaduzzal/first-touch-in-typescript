//learning func
// in js there are two type of func 
// normal func and arrow func
function add(num1 : number, num2 : number = 4) : number{
    return num1 + num2
}
add(2,5)

const arrowAdd = (num1 : number, num2:number) : number => num1 + num2;
arrowAdd(5,8)
// -----------
// object er vitor normal func likhte hoy.r obj er vitor je func likha hoy take bola hoy method
//  object --> func normal ----> is called method

const usePoor = {
    name: 'bright',
    balance : 0,
    addBalance(balance : number) : string{
        return `my new balance is ${this.balance + balance}`
    }
}
// object er moddle kono property ke access korte chaile this use korte hoy


// ---------------------------
const arr : number[] = [1,5,8];
const newArray : number[] = arr.map((ele : number) : number => ele * ele)
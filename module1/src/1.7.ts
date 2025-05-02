{
// spread operator
// rest operator
// destructure

// learn spread operator
const bros1 : string[] = ['asik','obaiman','morling'];
const bros2 : string[] = ['ruhul','momin','rubel'];
bros1.push(...bros2)
console.log(bros1);

const mentors1 ={
    typescript: 'mezba',
    redux : 'mir',
    dbms : 'mizan'
}

const mentor2 ={
    prisma : 'firoz',
    next: 'tanmoy',
    cloud : 'nahid'
}
const mentorsList = {
    ...mentors1,
    ...mentor2
}


// learn rest operator
// const greetingFriends = (fnd1:string,fnd2:string,fnd3:string){
//     console.log(`hi ${fnd1} ${fnd2} ${fnd3}`);
// }
const greetingFriends = (...friends:string[])=>{
    friends.forEach((fnd:string) =>console.log(`hi ${fnd}`))
}
greetingFriends('abul','babul','kabul','tabul') //here if in future add more str .for this we use rest operator


}
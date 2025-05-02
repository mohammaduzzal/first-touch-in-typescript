{
// destructure

const user ={
    id: 123,
    name:{
        firstName: 'bright',
        middleName : 'loka',
        lastName : 'vik'
    },
    contact : 015555,
    country: 'ban'

}
const {contact, name:{middleName : midName}} = user //here midName is alias.in obj you can not write type after key.cuz key : any word (is alias)



const myFriends = ['nik','ere','loka','vik','rick', 'morty','mikasa','sasha']

// const [a,b,bestFriend] = myFriends; //1 way
// const [,,bestFriend] = myFriends //way 2

const [,,bestFriend, ...rest] = myFriends //here from vik to sasha in rest operator  after bestFriend.they are in a variable






}
{

// union type | (or)

type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' //str literal type
type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper' //str literal type
type Developer = FrontendDeveloper | FullstackDeveloper


const newDeveloper :FrontendDeveloper = 'fakibazDeveloper'



type User = {
    name: string;
    email ? : string;
    gender : 'male' | 'female';
    bloodGroup : 'a+' | 'o+' | 'ab';

}

const user1 : User ={
    name: 'bright',
    gender: 'male',
    bloodGroup: 'a+'
}



// ----------intersection type & (common gu la) (and)

type FrontendWebDeveloper = {
    skill : string[];
    designation1 : 'frontendDeveloper'
}
type FullstackWebDeveloper = {
    skill : string[];
    designation2 : 'fullstackWebDeveloper'
}

type DeveloperFine = FrontendWebDeveloper & FullstackWebDeveloper

const fullstackDeveloper : DeveloperFine = {
    skill : ['HTML','CSS','JS','EXPRESS'],
    designation1:'frontendDeveloper',
    designation2: 'fullstackWebDeveloper'
}



}
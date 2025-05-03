{
    // 
    type Welcome = string;

    const welcome : Welcome = 'Hello World, I will complete this course successfully and become a Next level Web Developer!';
    console.log(welcome);

type Action = (name : string,age : number, role?:'admin'|'user'|'guest') => object
    const action : Action = (name, age, role) =>{
        return{name,age,role}; 
    }
  const result =   action('bright', 25,'user')
  console.log(result);
   






    // 
}
{
    // 
    // basic promise
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if (data) {
                resolve(data);
            } else {
                reject(data)
            }
        })
    };

    // calling createPromise func(we can di by .then and .catch | async await)
    const showData = async (): Promise<string> => {
        const data = await createPromise();
        // console.log(data);
        return data;
    };

    showData();

    // bool
    // basic promise
    const createPromise1 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            const data: boolean = true;
            if (data) {
                resolve(data);
            } else {
                reject(data)
            }
        })
    };

    // calling createPromise func(we can di by .then and .catch | async await)
    const showData1 = async (): Promise<boolean> => {
        const data = await createPromise1();
        // console.log(data);
        return data;
    };

    showData1();

    // func

    type Something = {
        something: string;
        nothing: string;
    }
    // basic promise
    const createPromise2 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'sth', nothing: 'nth' };
            if (data) {
                resolve(data);
            } else {
                reject(data)
            }
        })
    };

    // calling createPromise func(we can di by .then and .catch | async await)
    const showData2 = async (): Promise<Something> => {
        const data = await createPromise2();
        // console.log(data);
        return data;
    };

    showData2();

    // fetch external data

    type ToDo = {
         userId: number; 
         id: number;
         title: string ;
         completed: boolean; 
        }
    const geToDo = async () : Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        console.log(data);
        return data
    };
    geToDo();







    // 
}
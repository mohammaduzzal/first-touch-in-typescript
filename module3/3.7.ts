{
    // static =(jeter moddhe memory poriborton hoy na)
    class Counter{
      static  count : number = 0;
      static  increment(){
          return   (Counter.count = Counter.count + 1)
        }

       static decrement(){
            return (Counter.count = Counter.count - 1)
        }
    }


    // const instance1 = new Counter(); //jeheto kono parameter pathabo na seheto kisu dite hobe na
    console.log(Counter.increment()); // 1 -->different memory te ase
    console.log(Counter.increment()); // 1 -->different memory te ase
    console.log(Counter.increment()); // 1 -->different memory te ase

    // const instance2 = new Counter();
    console.log(Counter.increment()); // 1 -->different memory te ase
    console.log(Counter.increment());
    
    
    // const instance3 = new Counter();// 1 -->different memory te ase
    console.log(Counter.increment());




    // 
}
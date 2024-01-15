let createCounter = (init)=>{
    let current = init;
    return{
        increment:()=>{
            return ++init;
        },
        decrement:()=>{
            return --init;
        },
        reset:()=>{
            init = current;
            return init;
        }
    }
}

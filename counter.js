const createCounter = (n)=> {
let count = n
   return ()=> {
       count++
       return count-1
   }
};


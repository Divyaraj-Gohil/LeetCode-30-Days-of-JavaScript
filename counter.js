const createCounter = function(n) {
let count = n
   return ()=> {
       count++
       return count-1
   }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result=[]
    for(let i=0;i<n;i++){
        let idx=i+1
        if(idx%3===0 && idx%5===0){
            result.push("FizzBuzz")
        }else if(idx%3===0){
            result.push("Fizz")
        }else if(idx%5===0){
            result.push("Buzz")
        }else{
            result.push(`${idx}`)
        }
    }
    return result;
};
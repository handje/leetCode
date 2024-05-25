/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth=0;
    for(a of accounts){
        let temp=a.reduce((acc,curr)=>acc+curr);
        maxWealth=maxWealth<temp?temp:maxWealth;
    }
    return maxWealth
};
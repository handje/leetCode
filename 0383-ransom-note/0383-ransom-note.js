/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const rn=[...ransomNote]
    const mz=[...magazine]
   for(let i=0;i<rn.length;i++){
        let idx=mz.indexOf(rn[i])
        if(idx===-1){
            return false
        }else{
            mz.splice(idx,1)
        }
    }
    return true
};
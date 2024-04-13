/*
    Leetcode
    - Task: https://leetcode.com/problems/longest-common-prefix/
    - Solution: 
*/


function longestCommonPrefix(strs: string[]): string {
    const minLength = strs.map(s => s.length).sort((a,b) => a - b).shift()
    if(minLength == undefined) return ""
    let prefix = ""
    for(let i = 0; i < minLength; i++) {
        let checkedPrefix = strs[0][i]
        for(let y = 1; y < strs.length; y++) {
            if(checkedPrefix != strs[y][i]) return prefix
        }
        prefix += checkedPrefix
    }
    return prefix
};


console.log(longestCommonPrefix(["f1ower","flow","floght"]))


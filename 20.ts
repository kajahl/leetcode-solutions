/*
    Leetcode
    - Task: https://leetcode.com/problems/valid-parentheses/description/
    - Solution: https://leetcode.com/submissions/detail/1231410442/
*/

function isValid(s: string): boolean {
    const openBrackets = "({[";
    const closeBrackets = ")}]"
    const brackets : Array<string> = []

    for(let i = 0; i < s.length; i++) {
        const bracket = s[i];

        // Checking if it is opening bracket
        const openBracketIndex = openBrackets.indexOf(bracket)
        if(openBracketIndex != -1) {
            brackets.push(bracket)
            continue
        }

        // Getting last opening bracket and comparing with closing
        const lastOpeningBracket = brackets.pop()
        if(lastOpeningBracket == undefined) return false; // Empty array - closing without opening bracket

        const lastOpeningBracketIndex = openBrackets.indexOf(lastOpeningBracket)
        const correspondingClosingBracket = closeBrackets.charAt(lastOpeningBracketIndex)
        if(correspondingClosingBracket != bracket) return false;
    }
    if(brackets.length != 0) return false;
    return true
};
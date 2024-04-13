/*
    Leetcode
    - Task: https://leetcode.com/problems/merge-two-sorted-lists/
    - Solution: https://leetcode.com/problems/merge-two-sorted-lists/submissions/1231597764/
*/


/**
 * Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 == null) return list2
    if(list2 == null) return list1
    
    const array1 : Array<number> = toNumberArray(list1)
    const array2 : Array<number> = toNumberArray(list2)

    const array = [...array1, ...array2].sort((a,b) => a - b)
    const list = toListNode(array)

    return list
};

function toListNode(arr: Array<number>) {
    let mainNode = new ListNode(arr[arr.length - 1])
    for(let i = arr.length - 2; i >= 0; i--) {
        mainNode = new ListNode(arr[i], mainNode)
    }
    return mainNode;
}

function toNumberArray(list: ListNode | null) {
    let array : Array<number> = []
    while(list != null && list.next !== undefined) {
        array.push(list.val)
        list = list.next
    }
    return array
}

let list1 = toListNode([1,2,4])
let list2 = toListNode([1,3,4])

console.log(mergeTwoLists(list1, list2))


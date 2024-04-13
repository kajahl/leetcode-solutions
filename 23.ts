/*
    Leetcode
    - Task: https://leetcode.com/problems/merge-k-sorted-lists/
    - Solution: https://leetcode.com/problems/merge-k-sorted-lists/submissions/1231604044/

    Functions from Task 21, similar task
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length == 0) return null
    const array : Array<number> = []
    for(const list of lists) {
        array.push(...toNumberArray(list))
    }
    array.sort((a,b) => a - b)
    if(array.length == 0) return null
    return toListNode(array)
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

let list1 = [].map(a => toListNode(a))

console.log(mergeKLists(list1))


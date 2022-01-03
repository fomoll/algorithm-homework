/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//创建链表节点
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {
    const prevHead = new ListNode(-1)
    let prevNode = prevHead
    //对链表进行遍历，当边界值为null时结束
    while(list1 != null && list2 != null) {
        //当某个链表中当前节点的值比另一个链表中当前节点的值小时，使prevNode的next指向该链表，并且使该链表的指针向后移动一位
        if (list1.val <= list2.val) {
            prevNode.next = list1
            list1 = list1.next
        }else {
            prevNode.next = list2
            list2 = list2.next
        }
        //将prevNode的指向向后移动
        prevNode = prevNode.next
    }
    //当遍历结束后，最多有一个是非空的，将非空链表拼接到prevNode即可
    prevNode.next = list1 === null? list2 : list1
    return prevHead.next
};
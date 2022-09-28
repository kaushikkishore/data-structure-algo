/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }
  if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}

function print(list1: ListNode | null) {
  let current = list1;

  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
}

const one = new ListNode(1);
const two = new ListNode(2);
const four = new ListNode(4);
one.next = two;
two.next = four;

const l2one = new ListNode(1);
const l2two = new ListNode(3);
const l2four = new ListNode(4);
l2one.next = l2two;
l2two.next = l2four;

print(mergeTwoLists(one, l2one));

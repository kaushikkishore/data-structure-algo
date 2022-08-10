class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(1);
const c = new Node(1);
const d = new Node(3);
const e = new Node(4);
const f = new Node(4);
const g = new Node(4);
const h = new Node(5);
const i = new Node(6);
const j = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  let current = linkedList;
  while (current != null) {
    let nextDistinct = current.next;

    while (nextDistinct != null && nextDistinct.value === current.value) {
      nextDistinct = nextDistinct.next;
    }

    current.next = nextDistinct;
    current = nextDistinct;
  }

  return linkedList;
}

function printLinkedList(head) {
  let current = head;

  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}

console.log(printLinkedList(removeDuplicatesFromLinkedList(a)));

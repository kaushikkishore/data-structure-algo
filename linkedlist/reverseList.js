class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const reverseR = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseR(next, head);
};

const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};

// print(reverse(a));
print(reverseR(a));

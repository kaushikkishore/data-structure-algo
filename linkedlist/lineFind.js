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

const find = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

const findR = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return findR(head.next, target);
};

const result = findR(a, "D");
console.log(`First result ${result}`);

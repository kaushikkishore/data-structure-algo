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

const findNodeValue = (head, index) => {
  let i = 0;
  let current = head;

  while (current !== null) {
    if (index === i) {
      return current.val;
    }
    i = i + 1;
    current = current.next;
  }

  return "NA";
};

const findNodeR = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return findNodeR(head.next, index - 1);
};

const result = findNodeValue(a, 2);
console.log(`Result ${result}`);

const r2 = findNodeR(a, 2);
console.log(`Result ${r2}`);

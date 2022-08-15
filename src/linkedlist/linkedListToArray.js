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

const convertToArray = (head) => {
  const result = [];
  const current = head;
  if (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(`Result ${JSON.stringify(result)}`);
};

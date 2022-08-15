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
  let current = head;
  while (current !== null) {
    // console.log(current.val)
    result.push(current.val);
    current = current.next;
  }
  console.log(`Result is ${JSON.stringify(result)}`);
};

const convert = (head) => {
  const result = [];
  convertByRecursive(head, result);
  console.log(`Result ${JSON.stringify(result)}`);
};

const convertByRecursive = (head, val) => {
  if (head === null) return;
  val.push(head.val);
  convertByRecursive(head.next, val);
};

convertToArray(a);

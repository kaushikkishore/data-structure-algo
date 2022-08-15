class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(5);
const c = new Node(7);
const d = new Node(4);
const e = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const calculate = (head) => {
  let current = head,
    sum = 0;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  console.log(`Sum is ${sum}`);
};

const calculateRecursive = (head) => {
  if (head === null) return 0;

  return head.val + calculateRecursive(head.next);
};

const result = calculateRecursive(a);
console.log(`Sum us ${result}`);

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");
const h = new Node("H");
const i = new Node("I");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

d.left = h;
d.right = i;

// Use stack for this traversal
// LIFO
const traverse = (root) => {
  if (root === null) return [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.val);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
};

const traverseR = (root) => {
  if (root === null) return [];
  // const traverseR(root.left)
};

const result = traverse(a);
console.log(`${JSON.stringify(result)}`);

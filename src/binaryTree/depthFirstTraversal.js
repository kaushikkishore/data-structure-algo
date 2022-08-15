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
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
};

const traverseR = (root) => {
  if (root === null) return [];

  console.log(root.val);
  const leftV = traverseR(root.left);
  const rightV = traverseR(root.right);
  return [root.val, ...leftV, ...rightV];
};

const result = traverseR(a);
console.log(`${JSON.stringify(result)}`);

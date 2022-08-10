// This is the class of the input tree. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(10);
const b = new Node(5);
const c = new Node(15);

const d = new Node(2);
const e = new Node(5);

const f = new Node(13);
const g = new Node(22);

const h = new Node(1);
const i = new Node(14);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

d.left = h;
f.right = i;

function findClosestValueInBst(tree, target) {
  if (tree === null) return [];
  const queue = [tree];
  let minimum = Infinity;
  let nearest = 0;

  while (queue.length > 0) {
    let current = queue.shift();

    let diff = Math.abs(current.value - target);

    if (diff < minimum) {
      minimum = diff;
      nearest = current.value;
    }

    if (target > current.value && current.right !== null) {
      queue.push(current.right);
    } else if (current.left !== null) {
      queue.push(current.left);
    }
  }

  return nearest;
}

console.log(findClosestValueInBst(a, 12));

// This is the class of the input tree. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

const d = new Node(4);
const e = new Node(5);

const f = new Node(6);
const g = new Node(7);

const h = new Node(8);
const i = new Node(9);
const j = new Node(10);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

d.left = h;
d.right = i;

e.left = j;

// Time - O(n)
// space = O(n)
function branchSums(tree) {
  let result = [];
  calculateBranchSum(tree, 0, result);
  return result;
}

function calculateBranchSum(node, runningSum, result) {
  if (node === null) return;
  let newRunningSum = node.value + runningSum;

  if (node.left === null && node.right === null) {
    result.push(newRunningSum);
    return;
  }
  calculateBranchSum(node.left, newRunningSum, result);
  calculateBranchSum(node.right, newRunningSum, result);
}

console.log(branchSums(a));

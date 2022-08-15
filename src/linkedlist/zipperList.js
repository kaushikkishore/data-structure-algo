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

const p = new Node("P");
const q = new Node("Q");
const r = new Node("R");
const s = new Node("S");
const t = new Node("T");

p.next = q;
q.next = r;
r.next = s;
s.next = t;

const zipper = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;

  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (current1 !== null) {
    tail.next = current1;
  }

  if (current2 !== null) {
    tail.next = current2;
  }

  return head1;
};

const zipperR = (head1, head2, tail) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperR(next1, next2);

  return head1;
};

const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};

print(zipperR(a, p));

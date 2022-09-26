// https://gist.github.com/pprieto/07ecc082fdfec09ea84cc24ea28ffb21
// First makeRelationShipSet
// s = { key: string, value: string[] }
//  depends on (string, string, set);
// check the key in the s
// Not available insert key with empty array
// s { 'a': [] }
// depends on { 'a':{ dependsOn: ['b'], exclusive: ['c']}, 'b':['c'],  }

// iterate through all the keys ==> a, b

// Check Relationship
// two array result - b, c, , shouldNotBeIn - c ==> false

// areExclusive

function makeRelationshipSet() {
  return {};
}

function dependsOn(first, dependsOn, s = {}) {
  if (!s[first]) {
    // The key is not present in s
    if (first === dependsOn) {
      s[first] = { dep: [], exc: [] };
    } else {
      s[first] = { dep: [dependsOn], exc: [] };
    }
  } else {
    // Key is already there in the relationship
    s[first].dep.push(dependsOn);
  }
  return s;
}

function areExclusive(first, exclusive, s = {}) {
  if (!s[first]) {
    if (first === exclusive) {
      s[first] = { dep: [], exc: [] };
    } else {
      s[first] = { dep: [], exc: [exclusive] };
    }
  } else {
    s[first].exc.push(exclusive);
  }
  return s;
}

function printList(s) {
  console.log(`Adjancy list ${JSON.stringify(s)}`);
}

function checkRelationships(s) {
  // Check the relationships. Return either true or false based on whether that can be done or not.
  // Get the keys of the s
  // Iterate over that and maintain d, e array
  // Need to build adjancy list
  for (let key of Object.keys(s)) {
    console.log(key);
    if (s[key]?.d.length) {
      console.log(`Dependency ${JSON.stringify(s[key]?.d)}`);
    }

    if (s[key]?.e.length) {
      console.log(`Exclusion ${JSON.stringify(s[key]?.e)}`);
    }
  }
}

function explore(graph, node, visited) {
  visited.add(String(node));

  for (const neighbour of graph[node]?.d) {
    explore(graph, neighbour, visited);
  }
}

// toggle
// This will behave like a package.json file
// whatever is already installed take that in account.
// If something is conflicting remove that from dependency list
// Otherwise keep appending to the dependency Object.

var s, selected;

s = makeRelationshipSet();
s = dependsOn('a', 'a', s);
console.assert(checkRelationships(s));

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'a', s);
console.assert(checkRelationships(s));

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = areExclusive('a', 'b', s);
console.assert(!checkRelationships(s));

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'c', s);
s = areExclusive('a', 'c', s);
console.assert(!checkRelationships(s));

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'c', s);
s = dependsOn('c', 'a', s);
s = dependsOn('d', 'e', s);
s = areExclusive('c', 'e', s);
console.assert(checkRelationships(s));

// This function takes some arguments and returns a set of selected options.
// If needed, you should replace it with your own data structure.
function set() {
  var l = {};
  for (var i in arguments) {
    l[arguments[i]] = true;
  }
  return l;
}

// This function returns whether two sets of selected options have the same options selected.
// If needed, you should reimplement it for your own data structure.
function setsEqual(a, b) {
  var ka = Object.keys(a).sort();
  var kb = Object.keys(b).sort();
  if (ka.length != kb.length) {
    return false;
  }
  for (var i in ka) {
    if (kb[i] != ka[i]) {
      return false;
    }
  }
  return true;
}

selected = set(); // Or list, array, etc.

selected = toggle(selected, 'a', s);
console.assert(setsEqual(selected, set('a', 'c', 'b')));

s = dependsOn('f', 'f', s);
selected = toggle(selected, 'f', s);
console.assert(setsEqual(selected, set('a', 'c', 'b', 'f')));

selected = toggle(selected, 'e', s);
console.assert(setsEqual(selected, set('e', 'f')));

selected = toggle(selected, 'b', s);
console.assert(setsEqual(selected, set('a', 'c', 'b', 'f')));

s = dependsOn('b', 'g', s);
selected = toggle(selected, 'g', s);
selected = toggle(selected, 'b', s);
console.assert(setsEqual(selected, set('g', 'f')));

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'c', s);
selected = set();
selected = toggle(selected, 'c', s);
console.assert(setsEqual(selected, set('c')));

// Deep dependencies
s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'c', s);
s = dependsOn('c', 'd', s);
s = dependsOn('d', 'e', s);
s = dependsOn('a', 'f', s);
s = areExclusive('e', 'f', s);
console.assert(!checkRelationships(s));

// Multiple dependencies and exclusions.

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('a', 'c', s);
s = areExclusive('b', 'd', s);
s = areExclusive('b', 'e', s);
console.assert(checkRelationships(s));
selected = set();
selected = toggle(selected, 'd', s);
selected = toggle(selected, 'e', s);
selected = toggle(selected, 'a', s);
console.assert(setsEqual(selected, set('a', 'c', 'b')));

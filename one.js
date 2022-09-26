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

/**
 * False in this case.
 * a - b, not c
 * b - c
 *
 */

s = makeRelationshipSet();
s = dependsOn('a', 'b', s);
s = dependsOn('b', 'c', s);
s = areExclusive('a', 'c', s);
printList(s);
// console.assert(!checkRelationships(s));

// First makeRelationShipSet
// s = { key: string, value: string[] }
//  depends on (string, string, set);
// check the key in the s
// Not available insert key with empty array
// s { 'a': [] }
// depends on { 'a':['b'], 'b':'a' }

function makeRelationshipSet() {
  return { dep: [], exc: [] };
}

function dependsOn(a, b, s) {
  s.dep.push([a, b]);
  return s;
}

function areExclusive(a, b, s) {
  s.exc.push(a, b);
  return s;
}

// Build the adgency list of dependsOn and areExclusive

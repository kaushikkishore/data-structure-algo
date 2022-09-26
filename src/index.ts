// First makeRelationShipSet
// s = { key: string, value: string[] }
//  depends on (string, string, set);
// check the key in the s
// Not available insert key with empty array
// s { 'a': [] }
// depends on { 'a':['b'], 'b':'a' }

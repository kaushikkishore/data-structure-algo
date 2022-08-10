function groupAnagrams(words) {
  // Write your code here.
  let result = {};
  for (let i = 0; i < words.length; i++) {
    let key = getKey(words[i]);
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(words[i]);
  }
  return JSON.stringify(Object.values(result));
}

function getKey(key) {
  return key.split("").sort().join("");
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);

console.log(groupAnagrams([]));

console.log(groupAnagrams(["test"]));

console.log(groupAnagrams(["abc", "dabd", "bca", "cab", "ddba"]));
//

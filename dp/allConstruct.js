const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((ways) => [word, ...ways]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false

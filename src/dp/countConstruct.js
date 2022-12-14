const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  let total = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const currentCount = countConstruct(suffix, wordBank, memo);
      total = total + currentCount;
      memo[target] = total;
    }
  }
  memo[target] = total;
  return total;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false

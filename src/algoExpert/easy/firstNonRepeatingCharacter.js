function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let map = {};
  for (let i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = 0;
    }
    map[string[i]] += 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

// console.assert(true ? "pass" : "fail");
console.log(firstNonRepeatingCharacter("abcdcaf"));
console.log(firstNonRepeatingCharacter("faadabcbbebdf"));

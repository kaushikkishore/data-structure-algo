// O(n2) time  | O(n) space

function longestPalindromincSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 0; i < string.length; i++) {
    const odd = getLongestPalindromFrom(string, i - 1, i + 1);
    const even = getLongestPalindromFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }

  return [leftIdx + 1, rightIdx];
}

console.log(longestPalindromincSubstring("abaxyzzyxf"));
console.log(longestPalindromincSubstring("a"));
console.log(longestPalindromincSubstring("it's highnoon"));
console.log(longestPalindromincSubstring("noon high it is"));
console.log(longestPalindromincSubstring("abccbait's highnoon"));

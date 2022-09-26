export interface IMap {
  [key: string]: number;
}
// Approch
// Move the left and right pointer to determine the longest length
export function longestSubstringWithoutRepetingChars(input: string) {
  //
  let left = 0,
    right = 0;
  let maxLength = 0;
  let map: IMap = {};
  while (input.length > right) {
    if (map[input[right]] >= 0) {
      left = Math.max(left, map[input[right]] + 1);
    }

    map[input[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

console.log(longestSubstringWithoutRepetingChars('abcabcbb'));
console.log(longestSubstringWithoutRepetingChars('bbbbb'));
console.log(longestSubstringWithoutRepetingChars('pwwkew'));
console.log(longestSubstringWithoutRepetingChars('abcsdefgh'));
console.log(longestSubstringWithoutRepetingChars('ababcdea'));
console.log(longestSubstringWithoutRepetingChars('abcdebabc'));

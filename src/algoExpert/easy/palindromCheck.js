function isPalindrome(input) {
  // Write your code here.
  let start = 0,
    end = input.length - 1;

  while (end >= start) {
    if (input[start] !== input[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("a"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("abcdefghhgfedcba"));
console.log(isPalindrome("abcdefghihgfedcba"));

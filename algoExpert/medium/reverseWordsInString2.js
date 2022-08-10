function reverseWordsInString(string) {
  // Write your code here.
  const stringArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    stringArray.push(string[i]);
  }

  let startOfWord = 0;

  while (startOfWord < stringArray.length) {
    let endOfWord = startOfWord;
    while (endOfWord < stringArray.length && stringArray[endOfWord] != " ") {
      endOfWord++;
    }
    reverse(stringArray, startOfWord, endOfWord - 1);

    startOfWord = endOfWord + 1;
  }

  return stringArray.join("");
}

function reverse(list, start, end) {
  while (start < end) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}

// console.log(reverse("kaushik"));

console.log(reverseWordsInString("AlgoExpert is the best!"));
console.log(reverseWordsInString("     AlgoExpert is      the best!     "));

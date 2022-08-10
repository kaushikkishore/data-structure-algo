function reverseWordsInString(string) {
  // Write your code here.
  let visitedTill = 0;
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      // console.log(`current index ${i}`);
      // reverse the string from last index to current index.
      let word = string.substring(visitedTill, i);
      newArr.push(word);
      visitedTill = i;
    } else if (string[visitedTill] === " ") {
      newArr.push(" ");
      visitedTill = i;
    }
  }

  newArr.push(string.substring(visitedTill));

  return reverse(newArr).join("");
}

function reverse(list) {
  let start = 0;
  end = list.length - 1;

  while (end > start) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    end--;
    start++;
  }

  return list;
}

// console.log(reverse("kaushik"));

console.log(reverseWordsInString("AlgoExpert is the best!"));
console.log(reverseWordsInString("     AlgoExpert is      the best!     "));

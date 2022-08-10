// /**
//  * Description
//  * This will take an array of strings and it will replace all words which is space seprated.
//  * It will not change the position of the words.
//  * It should not use extra space.
//  * You cannot duplicate the array.
//  *
//  * Logic
//  * Iterate over the array and reverse each words. As array is passed as reference Type so it will do inplace edits.
//  * First pointer is moving from start of the array and second pointer will move backwards from the point where space ends.
//  *
//  */
// const reverseWords = (input) => {
//   if (input === null || input.length === 0) return;

//   let index = 0;
//   let last =
//     input.indexOf(" ", index) > -1 ? input.indexOf(" ", index) : input.length;

//   while (last >= index) {
//     reverseWord(input, index, last - 1);
//     index = last + 1;
//     last =
//       input.indexOf(" ", index) > -1 ? input.indexOf(" ", index) : input.length;
//   }
//   console.log(input);
// };

// const reverseWord = (input, index, last) => {
//   while (last >= index) {
//     let temp = input[last];
//     input[last] = input[index];
//     input[index] = temp;
//     last -= 1;
//     index += 1;
//   }
//   // console.log(input);
// };
// let t = [
//   "I",
//   " ",
//   "d",
//   "r",
//   "i",
//   "v",
//   "e",
//   " ",
//   "w",
//   "i",
//   "t",
//   "h",
//   " ",
//   "B",
//   "o",
//   "l",
//   "t",
// ];
// reverseWords(t);

// t = ["d", "r", "i", "v", "e"];
// reverseWords(t);

// t = ["d"];
// reverseWords(t);

// t = [];
// reverseWords(t);

/*
Explanation of logic 
Take the array start from 0 index and find the last as where space is starting. 
Swap the items of the first and last pointer. WHich will reverse the string in place. 
Then move the start with 1 and Move the last with -1. 
This will reverse the word in place. and no extra space will be used. 

*/

function reverseWords(input) {
  if (input === null || input.length === 0) return;

  let index = 0;
  let last = input.indexOf(" ") > -1 ? input.indexOf(" ") : input.length;

  while (last >= index) {
    reverseWord(input, index, last - 1);
    index = last + 1; // As to skip the space.
    last = input.indexOf(" ") > -1 ? input.indexOf(" ") : input.length;
  }
  return input;
}

function reverseWord(input, index, last) {
  while (last >= index) {
    let temp = input[last];
    input[last] = input[index];
    input[index] = temp;
    // Move pointers
    last -= 1;
    index += 1;
  }
}
console.log(
  reverseWords([
    "I",
    " ",
    "e",
    "v",
    "i",
    "r",
    "d",
    " ",
    "h",
    "t",
    "i",
    "w",
    " ",
    "t",
    "l",
    "o",
    "B",
  ])
);

console.log(reverseWords(["h", "t", "i", "w", " ", "t", "l", "o", "B"]));

console.log(reverseWords(["t", "l", "o", "B"]));

console.log(reverseWords([" "]));

console.log(reverseWords([]));

console.log(reverseWords(null));

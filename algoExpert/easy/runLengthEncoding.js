function runLengthEncoding(input) {
  // Write your code here.
  let count = 1;
  let output = "";
  let currChar = null;

  for (let index = 0; index < input.length; index++) {
    currChar = input[index];
    if (currChar === input[index + 1] && count < 9) {
      count++;
    } else {
      output = `${output}${count}${currChar}`;
      count = 1;
    }
  }
  return output;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")); // 9A4A2B4C2D

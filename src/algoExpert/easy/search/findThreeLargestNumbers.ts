// input -  [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// output - [18, 141, 541]

export function findThreeLargestNumbers(array: number[]) {
  // Write your code here.
  const threeLargest = [Infinity, Infinity, Infinity];
  for (let num of array) {
    updateArray(threeLargest, num);
  }
  return threeLargest;
}

function updateArray(array: number[], num: number) {
  if (array[2] === Infinity || num > array[2]) {
    shiftAndUpdate(array, num, 2);
  } else if (array[1] === Infinity || num > array[1]) {
    shiftAndUpdate(array, num, 1);
  } else if (array[0] === Infinity || num > array[0]) {
    shiftAndUpdate(array, num, 0);
  }
}

function shiftAndUpdate(array: number[], num: number, index: number) {
  for (let i = 0; i < index + 1; i++) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);

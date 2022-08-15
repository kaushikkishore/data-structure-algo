function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  // console.log(arrayTwo, arrayOne);
  let first = 0;
  let second = 0;

  let min = Infinity;
  let pair = [];
  while (first < arrayOne.length && second < arrayTwo.length) {
    let diff = Math.abs(arrayOne[first]) - Math.abs(arrayTwo[second]);
    diff = Math.abs(diff);
    if (diff === 0) {
      return [arrayOne[first], arrayTwo[second]];
    } else if (arrayOne[first] < arrayTwo[second]) {
      if (diff < min) {
        min = diff;
        pair = [arrayOne[first], arrayTwo[second]];
      }
      first = first + 1;
    } else if (arrayOne[first] > arrayTwo[second]) {
      if (diff < min) {
        min = diff;
        pair = [arrayOne[first], arrayTwo[second]];
      }
      second = second + 1;
    }
  }

  return pair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));

/**
   {
  "arrayOne": [-1, 5, 10, 20, 3],
  "arrayTwo": [26, 134, 135, 15, 17]
}
{
  "arrayOne": [10, 0, 20, 25],
  "arrayTwo": [1005, 1006, 1014, 1032, 1031]
}
{
  "arrayOne": [10, 0, 20, 25, 2200],
  "arrayTwo": [1005, 1006, 1014, 1032, 1031]
}

{
  "arrayOne": [10, 0, 20, 25, 2000],
  "arrayTwo": [1005, 1006, 1014, 1032, 1031]
}

{
  "arrayOne": [240, 124, 86, 111, 2, 84, 954, 27, 89],
  "arrayTwo": [1, 3, 954, 19, 8]
}

{
  "arrayOne": [0, 20],
  "arrayTwo": [21, -2]
}

{
  "arrayOne": [10, 1000],
  "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
}

{
  "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
  "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
}

{
  "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
  "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
}

   */

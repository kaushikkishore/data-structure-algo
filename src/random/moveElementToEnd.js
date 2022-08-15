// You have to move the given element to at end. of array. Do only in place editing
// Traverse through the array and then check if the element is not matching then swap.
// https://www.algoexpert.io/questions/move-element-to-end
function moveElementToEnd(array, toMove) {
  // Write your code here.
  let first = 0,
    last = array.length - 1;

  while (first < last) {
    if (array[first] === toMove && array[last] === toMove) {
      last = last - 1;
    } else if (array[first] !== toMove) {
      first = first + 1;
    } else if (array[last] === toMove) {
      last = last - 1;
    } else if (array[first] === toMove && array[last] !== toMove) {
      // Swap
      let temp = array[last];
      array[last] = array[first];
      array[first] = temp;
    }
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

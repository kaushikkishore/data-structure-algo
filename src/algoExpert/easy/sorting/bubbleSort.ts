// Compare the item with the next item
// keep decreasing the last pointer. This means every loop runs in that case the last item is greatest of all.
// if there are no swap happened in that case break the loop.

export function bubbleSort(array: number[]): number[] {
  //
  let start = 0;
  let end = array.length - 1;

  while (end > start) {
    let isSorted = sort(array, end);
    if (isSorted === false) {
      break;
    }
    end--;
  }

  return array;
}

function sort(array: number[], lastIndex: number) {
  let index = 0;
  let isSwapHappened = false;
  while (lastIndex > index) {
    if (array[index] > array[index + 1]) {
      let temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
      isSwapHappened = true;
    }

    index++;
  }
  return isSwapHappened;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));

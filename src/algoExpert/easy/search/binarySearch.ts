// [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
// search 33

export function binarySearch(array: number[], target: number): number {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;

  while (end >= start) {
    let mid: number = Math.floor((start + end) / 2);
    if (array[start] === target) {
      return start;
    } else if (array[end] === target) {
      return end;
    } else if (array[mid] === target) {
      return mid;
    }

    if (target > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

export function binarySearchRecursive(array: number[], target: number): number {
  return searchRecusive(array, target, 0, array.length - 1);
}

// [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
// 33

function searchRecusive(
  array: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  let currentElement = array[mid];
  if (currentElement === target) {
    return mid;
  } else if (currentElement > target) {
    return searchRecusive(array, target, start, mid - 1);
  } else {
    return searchRecusive(array, target, mid + 1, end);
  }
}

console.log(binarySearchRecursive([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

// console.log(binarySearchRecursive([1, 5, 23, 111], 35))

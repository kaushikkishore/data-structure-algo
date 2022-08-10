function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    let index = Math.abs(array[i]) - 1;
    if (array[index] < 0) {
      return Math.abs(array[i]);
    }
    array[index] = array[index] * -1;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]));
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));

// all student wearing red must be in same row
// all student wearing blue must be in same row
// smaller student must in first row and taller in last row.
// https://www.algoexpert.io/questions/class-photos
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const isLongestRed = redShirtHeights[0] > blueShirtHeights[0];

  let i = 0;
  while (i < redShirtHeights.length) {
    // compare here.
    if (isLongestRed) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false;
      }
    } else {
      if (blueShirtHeights[i] <= redShirtHeights[i]) {
        return false;
      }
    }

    i++;
  }

  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));
console.log(classPhotos([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
console.log(classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]));
console.log(
  classPhotos([19, 2, 4, 6, 2, 3, 1, 1, 4], [21, 5, 4, 4, 4, 4, 4, 4, 4])
);

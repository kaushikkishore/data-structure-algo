const makeSquare = (matchSticks) => {
  let totalSum = matchSticks.reduce((a, c) => a + c);

  if (totalSum % 4 !== 0) return false;

  let maxSizeOfStick = totalSum / 4;

  let array = [0, 0, 0, 0];

  console.log(backTrack(0, matchSticks.reverse(), array, maxSizeOfStick));
};

const backTrack = (index, matchSticks, array, maxSizeOfStick) => {
  if (index === matchSticks.length) return true;
  for (let j = 0; j < 4; j++) {
    if (array[j] + matchSticks[index] <= maxSizeOfStick) {
      array[j] += matchSticks[index];
      if (backTrack(index + 1, matchSticks, array, maxSizeOfStick) === true) {
        return true;
      }
      array[j] -= matchSticks[index];
    }
  }

  return false;
};

makeSquare([1, 1, 1, 2, 5, 5, 5]); // true

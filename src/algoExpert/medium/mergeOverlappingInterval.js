function mergeOverlappingIntervals(array) {
  let final = [];

  array.sort(([a], [b]) => a - b);

  let currentInterval = array[0];
  final.push(currentInterval);
  for (let index = 0; index < array.length; index++) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextStart, nextEnd] = array[index];

    if (currentIntervalEnd >= nextStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextEnd);
    } else {
      currentInterval = array[index];
      final.push(currentInterval);
    }
  }

  return JSON.stringify(final);
}

console.log(
  mergeOverlappingIntervals([
    [100, 105],
    [1, 104],
  ])
);

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);

console.log(
  mergeOverlappingIntervals([
    [1, 10],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100],
  ])
);

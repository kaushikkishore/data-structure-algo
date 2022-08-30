export const combination = (arr: number[]) => {
  let final: number[][] = [[]];

  for (let j = 0; j < arr.length; j++) {
    let finalClone = [...final];
    for (let index = 0; index < finalClone.length; index++) {
      let cloned: number[] = [...finalClone[index]];
      cloned.push(arr[j]);
      final.push(cloned);
    }
  }
  return JSON.stringify(final);
};

export const generate = (
  arr: number[],
  index: number = 0,
  current: number[] = [],
  result: number[][] = []
) => {
  if (current.length === 2) {
    result.push([...current]);
  }

  for (let i = index; i < arr.length; i++) {
    const element = arr[i];
    current.push(element);
    generate(arr, i + 1, current, result);
    current.pop();
  }
  return JSON.stringify(result);
};

console.log(generate([1, 2, 3, 4, 5]));

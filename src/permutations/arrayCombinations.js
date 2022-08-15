const combination = (arr) => {
  let final = [[]];

  for (let j = 0; j < arr.length; j++) {
    let finalClone = [...final];
    for (let index = 0; index < finalClone.length; index++) {
      let cloned = [...finalClone[index]];
      cloned.push(arr[j]);
      final.push(cloned);
    }
  }
  return JSON.stringify(final);
};

const generate = (arr, index = 0, current = [], result = []) => {
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

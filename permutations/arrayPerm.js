const permutate = (arr, permutations = [], answers = []) => {
  if (arr.length === 0) {
    answers.push([...permutations]);
  }
  for (let i = 0; i < arr.length; i++) {
    permutations.push(arr[i]);
    const remaining = arr.filter((item, index) => index !== i);
    permutate(remaining, permutations, answers);
    permutations.pop();
  }

  return answers;
};

console.log(permutate([1, 2, 3]));

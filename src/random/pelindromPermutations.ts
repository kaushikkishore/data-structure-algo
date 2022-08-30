export const permutations = (
  value: string,
  combination: string[] = [],
  result: string[][] = []
) => {
  if (value.length === 0) {
    result.push(combination);
  }
  for (let i = 0; i < value.length; i++) {
    let leftSide = value.substring(0, i + 1);
    let rightSide = value.substring(i + 1);
    // console.log(`Right side ${rightSide}`);
    if (isPalindrom(leftSide)) {
      let clonnedCombination: string[] = [...combination];
      clonnedCombination.push(leftSide);
      permutations(rightSide, clonnedCombination, result);
    }
  }
  return JSON.stringify(result);
};

export const isPalindrom = (value: string): boolean => {
  let start = 0;
  let end = value.length - 1;

  while (end >= start) {
    if (value[start] !== value[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(permutations('kausuak'));

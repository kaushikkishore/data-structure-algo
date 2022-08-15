function arrayOfProducts2(array) {
  // Write your code here.
  let newArray = new Array(array.length).fill(1);

  let product = 1;
  let leftArray = new Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    leftArray[i] = product;
    product = product * array[i];
  }

  product = 1;
  let rightArray = new Array(array.length).fill(1);
  for (let i = array.length - 1; i >= 0; i--) {
    rightArray[i] = product;
    product = product * array[i];
  }

  for (let i = 0; i < array.length; i++) {
    newArray[i] = leftArray[i] * rightArray[i];
  }

  return newArray;
}

function arrayOfProducts(array) {
  // Write your code here.
  let newArray = new Array(array.length).fill(1);

  let product = 1;
  let leftArray = new Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    leftArray[i] = product;
    product = product * array[i];
  }

  product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[i] = leftArray[i] * product;
    product = product * array[i];
  }

  return newArray;
}

let test = [
  [1, 8, 6, 2, 4],
  [5, 1, 4, 2],
  [-5, 2, -4, 14, -6],
  [9, 3, 2, 1, 9, 5, 3, 2],
  [4, 4],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [-1, -1, -1],
  [-1, -1, -1, -1],
  [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];

test.forEach((item) => {
  console.log(arrayOfProducts2(item));
  console.log(arrayOfProducts(item));
});

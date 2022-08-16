type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, multiplier: number = 1): number {
  // Write your code here.
  let total = 0;

  for(const element of array) {
    if(Array.isArray(element)){
        total += productSum(element, multiplier +1 );
    }
    else  {
        total += element;
    } 
  }

  return total * multiplier;
}


const result = productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
console.log(result);

console.log(productSum([
    [
      [
        [
          [5]
        ]
      ]
    ]
  ]))

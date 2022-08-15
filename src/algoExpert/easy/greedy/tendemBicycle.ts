
// Both array have same lengths 
// Max(first item and second item is called as speed)
// if fastest: true then return the max possible total speed otherwise minimum 
// red - [5,5,3,9,2] - [2,3,5,5,9]
// blue - [3,6,7,2,1] - [ 7,6,3,2,1 ]
// fastest: true 
// Result = 7 + 6 + 5 + 5 + 9 = 32 


// Test 2 
// blue - [3, 6, 7, 2, 1] [1,2,3,6,7]
// red - [5, 5, 3, 9, 2] [2,3,5,5,9]
// fastest: false 
// o/p = 1 + 2 + 3 + 5 + 7 = 
function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds:number[], fastest: boolean): number {
    // Write your code here.
    redShirtSpeeds.sort((a, b) => a-b);
  
    if(fastest) {
      blueShirtSpeeds.sort((a,b) => b-a);
    } else {
      blueShirtSpeeds.sort((a,b) => a-b);
    }
    
  
    let total = 0;
    let i = 0;
    while(redShirtSpeeds.length > i) {
      total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
      i++;
    }
  
    return total;
  }
  
  
  tandemBicycle([3, 6, 7, 2, 1],[5, 5, 3, 9, 2], false)
  
    export {};
    